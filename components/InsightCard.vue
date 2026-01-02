<template>
  <div class="card flex flex-col gap-3 h-full">
    <p class="text-sm text-slate-500">{{ formattedDate }}</p>
    <NuxtLink :to="`/insights/${insight.slug}`" class="text-xl font-semibold text-slate-900 hover:text-brand-600">{{ insight.title }}</NuxtLink>
    <p class="text-slate-600">{{ insight.excerpt }}</p>
    <NuxtLink :to="`/insights/${insight.slug}`" class="text-sm font-semibold text-brand-600 hover:text-brand-700 mt-auto">Read insight →</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Insight } from '~/data/content'

const props = defineProps<{ insight: Insight }>()
const formattedDate = computed(() => new Date(props.insight.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }))
</script>
