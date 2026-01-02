<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useHead, useRuntimeConfig } from '#imports'
import { createError } from 'h3'
import { insights, type Insight } from '~/data/content'

const route = useRoute()
const insight = computed<Insight | undefined>(() => insights.find(i => i.slug === route.params.slug))

if (!insight.value) {
  throw createError({ statusCode: 404, statusMessage: 'Insight not found' })
}

useHead({
  title: insight.value?.title,
  meta: [
    { name: 'description', content: insight.value?.excerpt },
    { property: 'og:title', content: insight.value?.title },
    { property: 'og:description', content: insight.value?.excerpt }
  ],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/insights/${insight.value?.slug}` }]
})

const paragraphs = computed(() => insight.value?.body.split('\n\n') ?? [])
const formattedDate = computed(() =>
  new Date(insight.value!.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
)
const shareUrl = computed(() => `${useRuntimeConfig().public.siteUrl}/insights/${insight.value!.slug}`)
const copied = ref(false)

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch (e) {
    copied.value = false
  }
}

const share = async () => {
  if (navigator.share) {
    await navigator.share({
      title: insight.value!.title,
      text: insight.value!.excerpt,
      url: shareUrl.value
    })
    return
  }
  await copyLink()
}

const download = () => {
  const content = `${insight.value!.title}\n${formattedDate.value}\n\n${insight.value!.excerpt}\n\n${insight.value!.body}`
  const blob = new Blob([content], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${insight.value!.slug}.txt`
  link.click()
  URL.revokeObjectURL(url)
}

const otherInsights = computed(() =>
  insights.filter(i => i.slug !== insight.value!.slug).slice(0, 3)
)
</script>

<template>
  <section class="section bg-slate-50">
    <div class="max-w-4xl mx-auto px-4 md:px-6">
      <div class="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 md:p-8 space-y-6">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div class="space-y-3">
            <p class="badge w-fit">Insight</p>
            <h1 class="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">{{ insight!.title }}</h1>
            <p class="text-sm text-slate-500">{{ formattedDate }}</p>
            <p class="text-lg text-slate-700">{{ insight!.excerpt }}</p>
          </div>
          <div class="flex items-center gap-4">
            <button
              class="inline-flex flex-col items-center gap-2 text-xs font-medium text-slate-600"
              type="button"
              @click="download"
              aria-label="Download insight as text">
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-5 w-5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" />
                </svg>
              </span>
              <span>Download</span>
            </button>
            <button
              class="inline-flex flex-col items-center gap-2 text-xs font-medium text-slate-600"
              type="button"
              @click="share"
              aria-label="Share insight">
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 transition">
                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-5 w-5" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.6"
                    d="M9 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm11-6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8.5 11.25l6-3.5M8.5 12.75l6 3.5"
                  />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-5 w-5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m5 13 4 4 10-10" />
                </svg>
              </span>
              <span>{{ copied ? 'Link copied' : 'Share' }}</span>
            </button>
          </div>
        </div>
        <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed">
          <p v-for="para in paragraphs" :key="para" class="mb-4 last:mb-0" v-html="para"></p>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="max-w-4xl mx-auto px-4 md:px-6 space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold text-slate-900">More insights</h2>
        <NuxtLink to="/insights" class="text-sm font-semibold text-brand-600 hover:text-brand-700">View all →</NuxtLink>
      </div>
      <div class="grid md:grid-cols-3 gap-4">
        <NuxtLink
          v-for="item in otherInsights"
          :key="item.slug"
          :to="`/insights/${item.slug}`"
          class="group border border-slate-200 rounded-xl p-4 bg-white hover:border-brand-200 hover:-translate-y-0.5 transition shadow-sm">
          <p class="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">Insight</p>
          <p class="text-xs text-slate-500 mb-2">
            {{ new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
          </p>
          <p class="text-base font-semibold text-slate-900 group-hover:text-brand-700 leading-snug mb-2">{{ item.title }}</p>
          <p class="text-sm text-slate-600 line-clamp-3">{{ item.excerpt }}</p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
