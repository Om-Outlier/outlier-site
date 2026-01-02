<template>
  <div
    class="card service-card flex flex-col gap-4 h-full"
    :style="{
      backgroundColor: theme.bg,
      borderColor: theme.border
    }">
    <div class="service-accent" :style="{ background: theme.accent }" aria-hidden="true"></div>
    <div class="flex items-start justify-between gap-3">
      <div class="space-y-1">
        <span
          class="category-chip"
          :style="{
            color: theme.tint,
            backgroundColor: theme.tintLight,
            borderColor: theme.tintBorder
          }">
          {{ service.category }}
        </span>
        <p class="text-lg font-semibold text-slate-900 leading-snug">{{ service.title }}</p>
      </div>
    </div>
    <div class="space-y-1.5 border-t border-slate-100/80 pt-3">
      <p class="text-xs font-semibold tracking-[0.04em] text-slate-500 leading-tight">Who it’s for</p>
      <p v-if="service.bestFor" class="text-[15px] text-slate-800 leading-[1.7]">{{ service.bestFor }}</p>
    </div>
    <div class="space-y-1.5">
      <p class="text-xs font-semibold tracking-[0.04em] text-slate-500 leading-tight">What it solves</p>
      <p class="text-[15px] md:text-base text-slate-900 leading-[1.7] min-h-[80px]">{{ service.description }}</p>
    </div>
    <ul class="space-y-2 text-sm text-slate-800 leading-[1.7] min-h-[88px]">
      <li v-for="item in service.outcomes.slice(0, 2)" :key="item" class="flex items-start gap-2">
        <span class="text-brand-600 font-semibold">•</span>
        <span>{{ item }}</span>
      </li>
    </ul>
    <div class="flex flex-wrap gap-2 mt-1">
      <span v-for="tag in service.highlights.slice(0, 2)" :key="tag" class="pill">{{ tag }}</span>
    </div>
    <div class="mt-auto flex flex-wrap gap-2 pt-2">
      <NuxtLink :to="{ path: '/contact', query: { topic: service.title } }" class="btn-primary text-sm">Book a working session</NuxtLink>
      <NuxtLink :to="`/services/${service.slug}`" class="text-sm font-semibold text-brand-600 hover:text-brand-700">
        {{ service.cta ?? 'See how we deliver →' }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Service } from '~/data/content'

const props = defineProps<{ service: Service; badge?: string }>()

const categoryThemes: Record<
  string,
  { bg: string; border: string; accent: string; tint: string; tintLight: string; tintBorder: string }
> = {
  'Core Platforms & Data': {
    bg: '#fff8f7',
    border: '#ffe1dc',
    accent: 'linear-gradient(90deg, #b1121c 0%, #f97316 100%)',
    tint: '#9f1239',
    tintLight: '#ffe3e8',
    tintBorder: '#ffd5df'
  },
  'Activation & Growth': {
    bg: '#f3fbff',
    border: '#d7f1ff',
    accent: 'linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)',
    tint: '#0369a1',
    tintLight: '#e2f2ff',
    tintBorder: '#cce8ff'
  },
  'Optimization & Scale': {
    bg: '#f8f9ff',
    border: '#e2e8ff',
    accent: 'linear-gradient(90deg, #6366f1 0%, #a855f7 100%)',
    tint: '#4338ca',
    tintLight: '#ecebff',
    tintBorder: '#ddd6fe'
  }
}

const defaultTheme = {
  bg: '#ffffff',
  border: '#e2e8f0',
  accent: 'linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)',
  tint: '#0f172a',
  tintLight: '#f1f5f9',
  tintBorder: '#e2e8f0'
}

const theme = computed(() => categoryThemes[props.service.category ?? ''] ?? defaultTheme)
</script>
