<script setup lang="ts">
import { partnerships } from '~/data/content'
import { useHead, useRuntimeConfig } from '#imports'

useHead({
  title: 'About OUTLIER',
  meta: [{ name: 'description', content: 'OUTLIER is a strategist + executioner team delivering marketing and commercial platforms for brands in Thailand.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/about` }]
})
</script>

<template>
  <section class="section">
    <div class="max-w-4xl mx-auto px-4 md:px-6 space-y-6">
      <p class="badge-outline w-fit">About OUTLIER</p>
      <h1 class="section-title">Strategy, build, and growth in one accountable squad</h1>
      <p class="text-lg text-slate-700 leading-relaxed">
        We are a Thailand-based team of strategists, engineers, data scientists, and growth operators. We combine consulting discipline with product shipping speed so brands can move from strategy to adoption without switching teams.
      </p>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="card">
          <p class="text-sm text-brand-600 font-semibold">End-to-end ownership</p>
          <p class="text-slate-700 mt-2">We define the platform vision, build it, operate campaigns, and optimize with data. One team, no handoffs.</p>
        </div>
        <div class="card">
          <p class="text-sm text-brand-600 font-semibold">Embedded with your teams</p>
          <p class="text-slate-700 mt-2">We work side-by-side with marketing, product, and IT, aligning to your governance, security, and data standards.</p>
        </div>
        <div class="card">
          <p class="text-sm text-brand-600 font-semibold">Measured delivery</p>
          <p class="text-slate-700 mt-2">Every sprint is tied to leading indicators and outcome metrics. We keep dashboards live from week one.</p>
        </div>
      </div>
      <div class="card">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">Credibility</h2>
        <p class="text-slate-700">We are certified and trusted by partners across the region.</p>
        <div class="flex flex-wrap gap-3 mt-4">
          <span v-for="item in partnerships" :key="item" class="badge">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
