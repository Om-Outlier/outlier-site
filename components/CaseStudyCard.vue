<template>
  <div class="case-card" :style="backgroundStyle">
    <div class="case-overlay base-overlay">
      <div class="flex items-start justify-between gap-3 w-full">
        <span class="pill pill-light">{{ caseStudy.industry }}</span>
        <span aria-hidden="true" class="badge bg-transparent text-transparent border-0 select-none">{{ badgeLabel }}</span>
      </div>
      <p class="text-2xl font-semibold text-white leading-tight case-text-shadow">{{ caseStudy.title }}</p>
    </div>
    <div class="case-overlay hover-overlay">
      <div class="flex items-start justify-between gap-3 w-full">
        <p class="text-sm font-semibold uppercase tracking-wide text-slate-700">{{ caseStudy.industry }}</p>
        <span class="badge bg-brand-50 text-brand-700 border border-brand-100">{{ badgeLabel }}</span>
      </div>
      <div class="space-y-2">
        <p class="text-base text-slate-700 font-semibold">{{ caseStudy.client }}</p>
        <p class="text-2xl font-semibold text-slate-900 leading-tight">{{ caseStudy.title }}</p>
      </div>
      <p class="text-slate-800 leading-relaxed">{{ caseStudy.impact }}</p>
      <ul class="space-y-1 text-sm text-slate-800">
        <li v-for="metric in caseStudy.metrics" :key="metric" class="flex items-start gap-2">
          <span class="font-semibold text-brand-600">▸</span>
          <span>{{ metric }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CaseStudy } from '~/data/content'

const props = defineProps<{ caseStudy: CaseStudy }>()
const caseStudy = computed(() => props.caseStudy)
const badgeLabel = computed(() => {
  if (['genai-support', 'fmcg-line-membership', 'cv-mediapipe-pose-engagement'].includes(caseStudy.value.id)) {
    return 'Validated'
  }
  return 'Real impact'
})

const backgroundStyle = computed(() => {
  if (caseStudy.value.image) {
    return {
      backgroundImage: `url(${caseStudy.value.image})`
    }
  }
  return {
    backgroundImage: 'linear-gradient(135deg, #fee2e2, #e0e7ff)'
  }
})
</script>
