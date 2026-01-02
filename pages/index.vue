<script setup lang="ts">
import { services, caseStudies, insights, partnerships, stats, clientLogos, type ClientLogo } from '~/data/content'
import { useHead, useRuntimeConfig } from '#imports'

const topInsights = insights.slice(0, 3)
const activeSlug = ref(services[0]?.slug)
const activeService = computed(() => services.find((s) => s.slug === activeSlug.value) ?? services[0])
const groupedServices = computed(() =>
  services.reduce<Record<string, typeof services>>((acc, svc) => {
    const key = svc.category ?? 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(svc)
    return acc
  }, {})
)

useHead({
  title: 'OUTLIER builds marketing & commercial platforms end-to-end',
  meta: [
    { name: 'description', content: 'Strategy, build, data, and growth in one team. OUTLIER delivers custom marketing and commercial platforms across Thailand.' },
    { property: 'og:title', content: 'OUTLIER (Thailand)' },
    { property: 'og:description', content: 'We design, build, and operate marketing and commercial platforms with measurable impact.' }
  ],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/` }]
})
</script>

<template>
  <div>
    <section class="section hero-section">
      <div class="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="badge-outline w-fit">Strategists who execute</p>
          <h1 class="text-4xl md:text-[2.65rem] font-semibold tracking-tight text-slate-900 leading-tight hero-title">
            <span class="hero-highlight hero-line">End-to-end</span>
            <span class="hero-line">tech enabled marketing and commercial growth.</span>
          </h1>
          <p class="text-lg text-slate-600 max-w-2xl">
            Delivered by one team that owns strategy, execution, and platforms. We work on real commercial problems and stay in the work until results show up, nothing gets lost between strategy and execution.
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink to="/contact" class="btn-primary">Book a working session</NuxtLink>
            <NuxtLink to="/services" class="btn-secondary hero-cta hero-cta-soft">See services</NuxtLink>
          </div>
          <div class="grid grid-cols-3 gap-4 max-w-xl text-sm text-slate-700">
            <div v-for="stat in stats" :key="stat.label" class="p-4 rounded-xl border border-slate-100 bg-white shadow-sm hero-stat">
              <p class="text-2xl font-semibold text-slate-900">{{ stat.value }}</p>
              <p class="text-slate-600">{{ stat.label }}</p>
            </div>
          </div>
          <p class="text-xs text-slate-500">Typical impact we see; actual results depend on baseline and execution scope.</p>
        </div>
        <div class="card shadow-soft how-card mt-4 md:mt-0">
          <h3 class="text-lg font-semibold mb-4 how-title">How we work</h3>
          <ol class="space-y-3 text-slate-700">
            <li class="how-step">
              <span class="step-number">01</span>
              <div>
                <p class="font-semibold text-slate-900">Co-design the measurable outcomes</p>
                <p class="text-slate-600">Define success, KPIs, and instrumentation before we write a line of code.</p>
              </div>
            </li>
            <li class="how-step">
              <span class="step-number">02</span>
              <div>
                <p class="font-semibold text-slate-900">Ship fast, with strategy and execution together</p>
                <p class="text-slate-600">One team owns experience, data, and growth. No handoffs.</p>
              </div>
            </li>
            <li class="how-step">
              <span class="step-number">03</span>
              <div>
                <p class="font-semibold text-slate-900">Operate and optimize</p>
                <p class="text-slate-600">Run campaigns, analyze signals, and iterate to improve adoption and revenue.</p>
              </div>
            </li>
            <li class="how-step">
              <span class="step-number">04</span>
              <div>
                <p class="font-semibold text-slate-900">Build for impact</p>
                <p class="text-slate-600">We focus on meaningful results, not just delivering to the brief.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section section-neutral">
      <div class="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div class="space-y-4">
          <p class="badge-outline w-fit">How we can help</p>
          <h2 class="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">Tell us your priority and we’ll show the play</h2>
          <p class="text-lg text-slate-700">Pick a focus area to see the outcome we drive and the shape of the solution we ship.</p>
          <div class="space-y-2">
            <div class="flex items-center gap-3">
              <label class="text-xs font-semibold uppercase tracking-wide text-slate-700">Focus area</label>
              <select
                v-model="activeSlug"
                class="w-full md:w-4/5 rounded-xl border border-slate-200 px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-300 transition">
                <optgroup v-for="(items, category) in groupedServices" :key="category" :label="category">
                  <option v-for="svc in items" :key="svc.slug" :value="svc.slug">
                    {{ svc.title }}
                  </option>
                </optgroup>
              </select>
            </div>
            <p class="text-sm text-slate-600">
              Don’t see your need?
              <NuxtLink to="/contact" class="font-semibold text-brand-600 hover:text-brand-700">Talk to us</NuxtLink>
            </p>
          </div>
        </div>
        <div class="card shadow-lg bg-white relative overflow-hidden">
          <div class="absolute inset-0 pointer-events-none"></div>
          <div class="relative space-y-3">
            <p class="pill pill-accent w-fit">Outcome preview</p>
            <h3 class="text-2xl font-semibold text-slate-900">{{ activeService?.title }}</h3>
            <p class="text-slate-700 leading-relaxed">{{ activeService?.description }}</p>
            <div class="space-y-2 text-sm text-slate-700">
              <p class="font-semibold text-slate-900">Expected outcomes</p>
              <ul class="space-y-1">
                <li v-for="item in activeService?.outcomes" :key="item" class="flex gap-2 items-start">
                  <span class="text-brand-600 font-semibold">▸</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="flex flex-wrap gap-3 items-center">
              <NuxtLink
                :to="{ path: '/contact', query: { topic: activeService?.title } }"
                class="btn-primary inline-flex items-center gap-2 w-fit">
                Book a working session
                <span aria-hidden="true">→</span>
              </NuxtLink>
              <NuxtLink
                :to="`/services/${activeService?.slug}`"
                class="text-sm font-semibold text-brand-600 hover:text-brand-700">
                View service details
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Proof"
          title="Recent outcomes"
          description="Representative work across FMCG, retail, ecommerce, and services." />
        <div class="grid md:grid-cols-2 gap-6">
          <CaseStudyCard v-for="cs in caseStudies" :key="cs.id" :case-study="cs" />
        </div>
      </div>
    </section>

    <section class="section section-credentials">
      <div class="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-6">
        <SectionHeader
          eyebrow="Credentials"
          title="Partners trust us to build and operate their platforms"
          description="Certified and battle-tested with leading partners in Thailand." />
        <div class="flex flex-wrap gap-3">
          <span v-for="item in partnerships" :key="item" class="badge">{{ item }}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          eyebrow="Brands"
          title="Trusted across categories"
          description="Representative logos from engagements; detailed references available under NDA." />
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div
            v-for="logo in clientLogos"
            :key="logo.label"
            class="logo-tile">
            <picture v-if="logo.image">
              <img
                :src="logo.image"
                :alt="logo.label"
                class="logo-image"
                loading="lazy" />
            </picture>
            <span v-else>{{ logo.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader title="Insights from the field" description="Practical notes from building, launching, and optimizing platforms." />
        <div class="grid md:grid-cols-3 gap-6">
          <InsightCard v-for="article in topInsights" :key="article.slug" :insight="article" />
        </div>
      </div>
    </section>

    <section class="section bg-slate-900 text-white">
      <div class="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-sm uppercase tracking-[0.2em] text-brand-100 text-opacity-80">Ready to move</p>
          <h3 class="text-3xl font-semibold mt-2">Let’s ship your next platform in weeks, not months.</h3>
          <p class="text-slate-200 mt-3 max-w-2xl">Book a working session with our strategist + executioner squad. We bring options, a plan, and the first set of measurable milestones.</p>
        </div>
        <NuxtLink to="/contact" class="btn-primary bg-white text-slate-900 hover:bg-slate-100">Book a session</NuxtLink>
      </div>
    </section>
  </div>
</template>
