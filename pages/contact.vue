<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useFetch, useHead, useRuntimeConfig, useRoute } from '#app'

const route = useRoute()
const topic = Array.isArray(route.query.topic) ? route.query.topic[0] : route.query.topic
const hasTopic = Boolean(topic)
const effectiveTopic = computed(() => topic || 'Working session')

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  website: '' // honeypot
})

if (topic) {
  form.message = `I'd like to discuss ${topic}.`
}

const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const submitForm = async () => {
  status.value = 'submitting'
  errorMessage.value = ''
  try {
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: {
        ...form,
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        topic: effectiveTopic.value
      }
    })
    if (error.value) throw error.value
    status.value = 'success'
    Object.assign(form, { name: '', company: '', email: '', phone: '', message: '', website: '' })
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.message || 'Something went wrong. Please try again.'
  }
}

useHead({
  title: 'Contact | OUTLIER',
  meta: [{ name: 'description', content: 'Book a working session with OUTLIER to plan your next platform or growth initiative.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/contact` }]
})
</script>

<template>
  <section class="section">
    <div class="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
      <p class="badge w-fit">Contact</p>
      <h1 class="section-title">Book a working session</h1>
      <p class="text-lg text-slate-700">Tell us about your platform goals. We respond within one business day.</p>
      <p class="text-sm text-slate-600">
        Prefer to call? <a href="tel:+66915391962" class="font-semibold text-brand-600 hover:text-brand-700">+66 91 539 1962</a>
      </p>
      <form class="card space-y-4" @submit.prevent="submitForm">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-slate-800">Name</label>
            <input v-model="form.name" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-800">Company</label>
            <input v-model="form.company" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-slate-800">Email</label>
            <input v-model="form.email" type="email" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-800">Phone</label>
            <input v-model="form.phone" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-slate-800">How can we help?</label>
          <p v-if="!hasTopic" class="text-xs text-slate-500 mt-1">Tell us about the problem you want to solve, or the solution you think you need.</p>
          <textarea v-model="form.message" rows="4" required class="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"></textarea>
        </div>
        <div class="hidden">
          <label>Leave this empty</label>
          <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
        </div>
        <div class="flex items-center gap-3">
          <button type="submit" class="btn-primary" :disabled="status === 'submitting'">
            <span v-if="status === 'submitting'">Submitting…</span>
            <span v-else>Send message</span>
          </button>
          <p v-if="status === 'success'" class="text-green-700 font-semibold">Received — we will reply shortly.</p>
          <p v-if="status === 'error'" class="text-red-600">{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </section>
</template>
