<script setup lang="ts">
import { caseStudies } from '~/data/content'
import { useHead, useRuntimeConfig } from '#imports'

useHead({
  title: 'Case Studies | OUTLIER',
  meta: [{ name: 'description', content: 'Representative case studies from OUTLIER across FMCG, retail, ecommerce, and services.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/work` }]
})
</script>

<template>
  <section class="section">
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <SectionHeader
        eyebrow="Case Studies"
        title="Case studies"
        description="Representative engagements. Detailed references available under NDA." />
      <div class="grid md:grid-cols-2 gap-6">
        <CaseStudyCard v-for="cs in caseStudies" :key="cs.id" :case-study="cs" />
      </div>
    </div>
  </section>
</template>
