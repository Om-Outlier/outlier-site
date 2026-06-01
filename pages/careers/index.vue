<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useHead, useRuntimeConfig, useFetch } from '#imports'
import { jobListings } from '~/data/content'

useHead({
  title: 'Careers | OUTLIER',
  meta: [{ name: 'description', content: 'Join OUTLIER to build and operate marketing and commercial platforms with measurable outcomes.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/careers` }]
})

const { query } = useRoute()

const form = reactive({
  name: '',
  email: '',
  role: typeof query.role === 'string' ? query.role : '',
  portfolioLinks: [''],
  cvLink: '',
  message: '',
  website: ''
})

const maxLinks = 5

const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const submitForm = async () => {
  status.value = 'submitting'
  errorMessage.value = ''
  try {
    const portfolioLinks = form.portfolioLinks
      .map(link => link.trim())
      .filter(Boolean)
      .slice(0, maxLinks)
      .join(', ')
    const composedMessage = `Role of interest: ${form.role || 'Not specified'}\nPortfolio/LinkedIn: ${portfolioLinks || 'Not provided'}\nCV: ${form.cvLink || 'Not provided'}\n\nWhat I've shipped:\n${form.message}`
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        company: 'Candidate',
        email: form.email,
        phone: '',
        message: composedMessage,
        website: form.website,
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        topic: 'Careers'
      }
    })
    if (error.value) throw error.value
    status.value = 'success'
    Object.assign(form, { name: '', email: '', role: '', portfolioLinks: [''], cvLink: '', message: '', website: '' })
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.message || 'Something went wrong. Please try again.'
  }
}

const addPortfolioLink = () => {
  if (form.portfolioLinks.length < maxLinks) {
    form.portfolioLinks.push('')
  }
}

const removePortfolioLink = (index: number) => {
  if (form.portfolioLinks.length > 1) {
    form.portfolioLinks.splice(index, 1)
  } else {
    form.portfolioLinks[0] = ''
  }
}
</script>

<template>
  <section class="section">
    <div class="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
      <p class="badge-outline w-fit">Careers</p>
      <h1 class="section-title">Join the OUTLIER team</h1>
      <p class="text-lg text-slate-700">For people who challenge the norm and raise the bar.</p>
      <div class="card">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Current opening roles</h2>
        <ul class="space-y-2 text-slate-700">
          <li v-for="job in jobListings" :key="job.slug" class="flex gap-2 items-start">
            <span class="text-brand-600 font-semibold mt-0.5">▸</span>
            <NuxtLink
              :to="`/careers/${job.slug}`"
              class="hover:text-brand-600 hover:underline transition-colors">
              {{ job.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="card space-y-4">
        <p class="text-slate-700">Send a short note with what you have shipped and the outcomes you drove.</p>
        <form class="space-y-4" @submit.prevent="submitForm">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-800">Name</label>
              <input v-model="form.name" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-800">Email</label>
              <input v-model="form.email" type="email" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-800">Role of interest</label>
              <select v-model="form.role" class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 bg-white">
                <option value="">Select a role…</option>
                <option v-for="job in jobListings" :key="job.slug" :value="job.title">{{ job.title }}</option>
              </select>
            </div>
          </div>
          <div class="space-y-2">
            <label class="block text-sm font-medium text-slate-800">Portfolio / LinkedIn (up to 5 links)</label>
            <div class="space-y-2">
              <div
                v-for="(_, index) in form.portfolioLinks"
                :key="index"
                class="flex items-center gap-2">
                <input
                  v-model="form.portfolioLinks[index]"
                  class="flex-1 rounded-lg border border-slate-200 px-3 py-2"
                  placeholder="Link to profile or work" />
                <button
                  type="button"
                  class="text-sm text-slate-500 hover:text-brand-600"
                  @click="removePortfolioLink(index)">
                  Remove
                </button>
              </div>
              <button
                type="button"
                class="text-sm font-semibold text-brand-600 hover:text-brand-700 disabled:text-slate-400"
                :disabled="form.portfolioLinks.length >= maxLinks"
                @click="addPortfolioLink">
                + Add link
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-800">CV link</label>
            <input v-model="form.cvLink" class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Link to CV/Resume (Google Drive, Notion, etc.)" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-800">What you've shipped</label>
            <textarea v-model="form.message" rows="4" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Highlights, outcomes, and impact"></textarea>
          </div>
          <div class="hidden">
            <label>Leave this empty</label>
            <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
          </div>
          <div class="flex items-center gap-3">
            <button type="submit" class="btn-primary" :disabled="status === 'submitting'">
              <span v-if="status === 'submitting'">Submitting…</span>
              <span v-else>Send application</span>
            </button>
            <p v-if="status === 'success'" class="text-green-700 font-semibold">Received — we'll reply shortly.</p>
            <p v-if="status === 'error'" class="text-red-600">{{ errorMessage }}</p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
