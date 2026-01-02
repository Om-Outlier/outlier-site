<script setup lang="ts">
import { computed, ref } from 'vue'
import { services } from '~/data/content'
import { useHead, useRuntimeConfig } from '#imports'

useHead({
  title: 'Services | OUTLIER',
  meta: [{ name: 'description', content: 'Strategy, build, data, activation, analytics, and GenAI enablement delivered by OUTLIER.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/services` }]
})

const categoryOrder = ['Core Platforms & Data', 'Activation & Growth', 'Optimization & Scale']

const groupedServices = computed(() => {
  const groups = new Map<string, typeof services[number][]>()
  services.forEach((svc) => {
    const key = svc.category ?? 'Other'
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)?.push(svc)
  })

  const ordered = categoryOrder
    .filter((category) => groups.has(category))
    .map((category) => ({ category, items: groups.get(category) ?? [] }))

  const remaining = Array.from(groups.entries())
    .filter(([category]) => !categoryOrder.includes(category))
    .map(([category, items]) => ({ category, items }))

  return [...ordered, ...remaining]
})

const filters = computed(() => {
  const counts = services.reduce<Record<string, number>>((acc, svc) => {
    const key = svc.category ?? 'Other'
    acc[key] = (acc[key] ?? 0) + 1
    return acc
  }, {})

  const pills = categoryOrder
    .filter((c) => counts[c])
    .map((c) => ({ label: c, count: counts[c], value: c }))
  const extras = Object.keys(counts)
    .filter((c) => !categoryOrder.includes(c))
    .map((c) => ({ label: c, count: counts[c], value: c }))

  return [{ label: 'All', count: services.length, value: 'All' }, ...pills, ...extras]
})

const selectedCategory = ref<string>('All')

const categoryHeaderThemes: Record<string, { badgeBg: string; text: string }> = {
  'Core Platforms & Data': {
    badgeBg: 'linear-gradient(135deg, #0f172a 0%, #1f2937 100%)',
    text: '#0f172a'
  },
  'Activation & Growth': {
    badgeBg: 'linear-gradient(135deg, #0f766e 0%, #065f46 100%)',
    text: '#0f766e'
  },
  'Optimization & Scale': {
    badgeBg: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 100%)',
    text: '#4338ca'
  }
}

const headerThemeFor = (category?: string) => categoryHeaderThemes[category ?? ''] ?? { badgeBg: '#f1f5f9', text: '#0f172a' }

const visibleGroups = computed(() => {
  if (selectedCategory.value === 'All') return groupedServices.value
  return groupedServices.value.filter((g) => g.category === selectedCategory.value)
})
</script>

<template>
  <section class="section">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader
        eyebrow="Services"
        title="Strategy + execution for marketing and commercial platforms"
        description="We cover the full lifecycle: strategy, build, data, activation, and growth operations." />
      <div class="mt-6 flex flex-wrap items-center gap-3">
        <div class="filter-bar">
          <button
            v-for="pill in filters"
            :key="pill.value"
            type="button"
            class="filter-pill"
            :class="{ 'filter-pill--active': selectedCategory === pill.value }"
            @click="selectedCategory = pill.value">
            <span>{{ pill.label }}</span>
            <span class="text-slate-400 text-xs">({{ pill.count }})</span>
          </button>
        </div>
      </div>

      <div class="space-y-8 mt-5">
        <div
          v-for="group in visibleGroups"
          :key="group.category"
          class="rounded-2xl border border-slate-100/80 bg-white/70 shadow-sm px-4 py-5 md:px-6 md:py-6 space-y-4">
          <div class="flex items-center gap-3">
            <div
              class="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold text-white shadow-sm"
              :style="{ background: headerThemeFor(group.category).badgeBg }">
              {{ group.category?.[0] ?? '•' }}
            </div>
            <div class="flex-1">
              <p class="text-sm font-semibold" :style="{ color: headerThemeFor(group.category).text }">{{ group.category }}</p>
              <div class="h-px bg-slate-100 mt-2"></div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            <ServiceCard v-for="svc in group.items" :key="svc.slug" :service="svc" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
