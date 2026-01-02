import { appendFile, mkdir } from 'fs/promises'
import { dirname } from 'path'
import { createError, getHeader, getRequestIP, readBody } from 'h3'

const rateLimitWindowMs = 60 * 60 * 1000
const maxRequestsPerWindow = 5
const requestLog = new Map<string, number[]>()

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?[0-9 ()-]{7,20}$/

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const ip = getHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() || getRequestIP(event) || 'unknown'
  const now = Date.now()
  const attempts = requestLog.get(ip) || []
  const recent = attempts.filter((t) => now - t < rateLimitWindowMs)
  if (recent.length >= maxRequestsPerWindow) {
    throw createError({ statusCode: 429, statusMessage: 'Too many requests' })
  }
  recent.push(now)
  requestLog.set(ip, recent)

  const { name, company, email, phone, message, website, pageUrl, userAgent, topic } = body || {}

  if (website) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid submission' })
  }

  if (!name || !company || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }
  if (!emailRegex.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }
  if (phone && !phoneRegex.test(String(phone).trim())) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid phone format' })
  }
  if (message.length < 10) {
    throw createError({ statusCode: 400, statusMessage: 'Message too short' })
  }

  const record = {
    name: String(name).trim(),
    company: String(company).trim(),
    email: String(email).trim(),
    phone: phone ? String(phone).trim() : '',
    message: String(message).trim(),
    timestamp: new Date().toISOString(),
    pageUrl: pageUrl ? String(pageUrl) : '',
    userAgent: userAgent ? String(userAgent) : '',
    topic: topic ? String(topic) : 'General'
  }

  const config = useRuntimeConfig()
  const storagePath = config.contactStoragePath || 'data/leads.jsonl'
  const dir = dirname(storagePath)
  await mkdir(dir, { recursive: true })
  await appendFile(storagePath, `${JSON.stringify(record)}\n`, { encoding: 'utf-8' })

  const sendgridApiKey = process.env.SENDGRID_API_KEY
  const toRecipients = ['om.b@outlier.co.th', 'pinyapat.j@outlier.co.th']
  const fromEmail = record.topic?.toLowerCase().includes('career') ? 'careers@outlier.co.th' : 'contact@outlier.co.th'

  if (sendgridApiKey) {
    try {
      const content = [
        `Name: ${record.name}`,
        `Company: ${record.company}`,
        `Email: ${record.email}`,
        `Phone: ${record.phone || 'N/A'}`,
        `Topic: ${record.topic}`,
        `Page: ${record.pageUrl || 'N/A'}`,
        `User Agent: ${record.userAgent || 'N/A'}`,
        '',
        record.message
      ].join('\n')

      await $fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sendgridApiKey}`,
          'Content-Type': 'application/json'
        },
        body: {
          personalizations: [{ to: toRecipients.map(email => ({ email })) }],
          from: { email: fromEmail, name: 'OUTLIER' },
          subject: `New ${record.topic || 'Contact'} submission`,
          content: [{ type: 'text/plain', value: content }]
        }
      })
    } catch (err) {
      console.error('SendGrid error', err)
    }
  }

  return { ok: true }
})
