<script setup lang="ts">
import { computed } from 'vue'
import { insights } from '~/data/content'
import { useHead, useRuntimeConfig } from '#imports'

useHead({
  title: 'Insights | OUTLIER',
  meta: [{ name: 'description', content: 'Practical notes and playbooks from OUTLIER on platforms, LINE, data activation, and growth.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/insights` }]
})

const sortedInsights = computed(() =>
  [...insights].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)
</script>

<template>
  <section class="section">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader
        eyebrow="Insights"
        title="Field notes and playbooks"
        description="Short perspectives from the real works." />
      <div class="grid md:grid-cols-3 gap-6">
        <InsightCard v-for="article in sortedInsights" :key="article.slug" :insight="article" />
      </div>
    </div>
  </section>
</template>
