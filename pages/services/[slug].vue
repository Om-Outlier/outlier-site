<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useHead, useRuntimeConfig } from '#imports'
import { createError } from 'h3'
import { services, type Service, caseStudies } from '~/data/content'

const route = useRoute()
const service = computed<Service | undefined>(() => services.find(s => s.slug === route.params.slug))

type ServiceDetail = {
  headline: string
  context: { paragraphs: string[]; bullets?: string[] }
  whenRight?: string[]
  whenNotRight?: string[]
  approachIntro?: string
  approach?: string[]
  changesAfter?: string[]
  cta?: string
}

const serviceDetails: Record<string, ServiceDetail> = {
  'custom-marketing-platforms': {
    headline: 'When growth breaks because campaigns, data, and channels don’t connect.',
    context: {
      paragraphs: [
        'Many brands don’t have a “platform problem” — they have a coordination problem. Campaigns are launched, data is collected, tools are added, but nothing compounds. Each initiative works in isolation, requiring rework every time.'
      ],
      bullets: ['Long launch cycles', 'Heavy engineering dependency', 'Data that exists but can’t be reused', 'Growth that spikes but doesn’t sustain']
    },
    whenRight: [
      'Campaigns take weeks to launch instead of days',
      'Each new initiative feels like a new build',
      'Data lives across tools without orchestration',
      'You need a system that compounds performance over time'
    ],
    whenNotRight: [
      'You only need a one-off campaign or landing page',
      'Your growth motion is simple and unlikely to scale',
      'You are looking for an off-the-shelf SaaS replacement'
    ],
    approachIntro: 'We design and build custom commercial platforms that sit between strategy and execution. Our work typically includes:',
    approach: [
      'Defining the commercial logic that governs offers, journeys, and incentives',
      'Designing a composable architecture that evolves without rework',
      'Building data foundations that power reuse and automation',
      'Instrumenting performance so learning feeds directly into iteration',
      'One team owns the full lifecycle — from intent to outcome'
    ],
    changesAfter: [
      'Campaigns launch faster without engineering bottlenecks',
      'Journeys adapt based on behavior, not guesswork',
      'Data becomes reusable, not disposable',
      'Growth becomes systematic instead of reactive'
    ],
    cta: 'Discuss whether a custom platform is the right answer for your growth problem'
  },
  'line-mini-app-solutions': {
    headline: 'When LINE engagement exists but commercial impact doesn’t.',
    context: {
      paragraphs: [
        'Many brands invest heavily in LINE — growing followers, running broadcasts, launching mini apps — yet struggle to prove how this translates into revenue or loyalty.',
        'The issue isn’t LINE adoption. It’s the lack of designed commercial mechanics behind it.'
      ]
    },
    whenRight: [
      'LINE is a core channel for your customers',
      'Engagement is high but conversion is unclear',
      'Loyalty programs feel disconnected from purchase behavior',
      'You need measurable impact, not vanity metrics'
    ],
    whenNotRight: [
      'LINE is not a priority channel',
      'You only need basic broadcast or coupon blasts',
      'You are experimenting without long-term ownership'
    ],
    approachIntro: 'We design LINE experiences as commercial systems, not content channels. This includes:',
    approach: [
      'Mini App UX and flows tied to real outcomes',
      'Offer, wallet, and reward mechanics',
      'Integration with CRM, e-commerce, and offline touchpoints',
      'Measurement that connects engagement to revenue'
    ],
    changesAfter: [
      'Active members, not just followers',
      'Clear linkage between LINE actions and sales',
      'Reusable mechanics instead of one-off campaigns',
      'A channel that compounds value over time'
    ],
    cta: 'Explore whether LINE should be a core revenue channel for your brand'
  },
  'crm-cdp-data-foundations': {
    headline: 'When customer data exists everywhere but works nowhere.',
    context: {
      paragraphs: [
        'Most organizations don’t lack data — they lack usable data. Profiles are fragmented, identities don’t match, and activation requires manual effort.',
        'Without a foundation, every activation becomes slower, riskier, and less effective.'
      ]
    },
    whenRight: [
      'Customer data lives across multiple systems',
      'Match rates across channels are poor',
      'Activation requires heavy manual work',
      'Teams disagree on “the truth”'
    ],
    whenNotRight: ['Your data volume is minimal', 'Activation needs are extremely simple', 'You are not yet activating data at all'],
    approachIntro: 'We build activation-ready data foundations, not theoretical CDPs. Our work focuses on:',
    approach: [
      'Identity resolution and profile unification',
      'Data quality rules that enforce reliability',
      'Structures designed for activation, not storage',
      'Governance that enables scale without chaos'
    ],
    changesAfter: [
      'One usable customer profile',
      'Faster, cleaner activation across channels',
      'Higher reach and match rates',
      'Less dependency on manual fixes'
    ],
    cta: 'Assess whether your data foundation is activation-ready'
  },
  'rag-genai-enablement': {
    headline: 'When AI ambition outpaces trust, governance, and real value.',
    context: {
      paragraphs: [
        'Many teams experiment with AI, but pilots stall because: outputs aren’t trusted; knowledge isn’t grounded; compliance and governance are unclear.',
        'AI without structure becomes risk, not leverage.'
      ]
    },
    whenRight: [
      'You want AI tied to real internal knowledge',
      'Outputs must be accurate and on-brand',
      'Governance and auditability matter',
      'Use cases span ops, support, and teams'
    ],
    whenNotRight: ['You want generic AI experimentation', 'Accuracy and control are not critical', 'There is no real knowledge base to ground on'],
    approachIntro: 'We deploy governed AI copilots using retrieval-augmented generation. This includes:',
    approach: ['Curated knowledge pipelines', 'Safety and access controls', 'Role-based usage and logging', 'Integration into real workflows'],
    changesAfter: ['Faster answers without hallucination risk', 'Productivity gains across teams', 'Confidence from compliance and control', 'AI that actually gets used'],
    cta: 'Discuss where AI can safely deliver real value'
  },
  'campaign-systems-activation-mechanics': {
    headline: 'When every campaign is rebuilt from scratch.',
    context: {
      paragraphs: [
        'Teams run more campaigns than ever — but without systems. Each mechanic is re-designed, re-approved, and re-implemented, slowing execution and increasing risk.'
      ]
    },
    whenRight: ['Campaign volume is high', 'Mechanics repeat with small variations', 'Governance and speed are both required', 'Scale matters more than novelty'],
    whenNotRight: ['You only run occasional campaigns', 'Speed is not a concern', 'Governance is not required'],
    approachIntro: 'We design reusable activation systems that power campaigns. This includes:',
    approach: ['Offer, mission, wallet, and referral engines', 'Configurable rules instead of hard-coded logic', 'Built-in governance and reporting'],
    changesAfter: ['New campaigns launch in days, not weeks', 'Teams reuse proven mechanics', 'Risk decreases as speed increases'],
    cta: 'See how campaign systems replace campaign chaos'
  },
  'o2o-event-field-activation': {
    headline: 'When offline activity has no digital memory.',
    context: {
      paragraphs: ['Events, stores, and field teams generate massive engagement — but without data connection, value disappears after the moment.']
    },
    whenRight: ['You run events or field programs', 'Participation must be validated', 'Fraud prevention matters', 'ROI needs to be measurable'],
    whenNotRight: ['Activities are purely brand exposure', 'No digital follow-up is required'],
    approachIntro: 'We design offline-to-online activation systems that connect actions to profiles. Including:',
    approach: ['QR / NFC / code-based participation', 'Staff-assisted validation flows', 'Reward and data linkage'],
    changesAfter: ['Offline actions become measurable signals', 'Fraud drops without hurting experience', 'Field activity feeds digital growth'],
    cta: 'Connect offline moments to measurable outcomes'
  },
  'data-activation': {
    headline: 'When signals exist but action is inconsistent.',
    context: {
      paragraphs: ['Data often sits unused because activation is either fully manual and slow, or fully automated and blind. Real growth needs both.']
    },
    whenRight: ['Signals exist across channels', 'Timing matters', 'Human judgment still plays a role'],
    approachIntro: 'We design activation playbooks that blend automation and control.',
    changesAfter: ['Higher activation throughput', 'Better ROI from timely actions'],
    cta: 'Turn signals into reliable action'
  },
  'growth-experimentation-commercial-optimization': {
    headline: 'When growth decisions rely on opinion, not evidence.',
    context: { paragraphs: ['Without structure, experimentation becomes random and learning is lost.'] },
    whenRight: ['Growth levers are unclear', 'Teams debate instead of test', 'Scale requires discipline'],
    approachIntro: 'We build test-and-learn engines with governance.',
    changesAfter: ['Faster learning', 'Compounding performance'],
    cta: 'Build a disciplined growth engine'
  },
  'analytics-optimization-continuous-improvement': {
    headline: 'When insight arrives too late to matter.',
    context: { paragraphs: ['Dashboards exist, but decisions lag behind reality.'] },
    whenRight: ['You need fast diagnosis', 'Continuous improvement matters'],
    approachIntro: 'We instrument platforms end-to-end and close the loop.',
    changesAfter: ['Faster decisions', 'Sustained KPI lift'],
    cta: 'Close the loop between insight and action'
  },
  'security-compliance-enterprise-readiness': {
    headline: 'When platforms can’t pass enterprise scrutiny.',
    context: { paragraphs: ['Security, privacy, and compliance aren’t optional — they’re blockers.'] },
    whenRight: ['ISO, privacy, or procurement matter', 'Auditability is required'],
    approachIntro: 'We harden platforms with enterprise-grade controls.',
    changesAfter: ['Faster approvals', 'Reduced operational risk'],
    cta: 'Make platforms enterprise-ready'
  }
}

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Service not found' })
}

const detail = computed<ServiceDetail | undefined>(() => service.value && serviceDetails[service.value.slug])

useHead({
  title: service.value?.title,
  meta: [{ name: 'description', content: service.value?.description }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/services/${service.value?.slug}` }]
})

const relatedCases = caseStudies.slice(0, 2)
</script>

<template>
  <section class="section bg-white">
    <div class="max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-8 pb-14 md:pb-18 space-y-10 md:space-y-14">
      <div class="grid md:grid-cols-[1.3fr_1fr] gap-4 md:gap-6 items-start">
        <div class="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-6 md:p-7 space-y-4">
          <p class="badge-outline mb-1 w-fit">Services</p>
          <h1 class="text-3xl md:text-[2.4rem] font-semibold leading-tight text-slate-900">{{ service!.title }}</h1>
          <p v-if="detail?.headline" class="text-lg md:text-xl text-slate-900 font-semibold leading-relaxed">{{ detail!.headline }}</p>
        </div>
        <div class="card space-y-3">
          <p class="text-sm font-semibold text-slate-800">Quick view</p>
          <div class="space-y-2 text-slate-700 leading-relaxed">
            <p v-if="service?.bestFor"><span class="font-semibold text-slate-900">Who it’s for: </span>{{ service!.bestFor }}</p>
            <p><span class="font-semibold text-slate-900">Category: </span>{{ service!.category }}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in service?.highlights.slice(0, 2)" :key="tag" class="pill">{{ tag }}</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink :to="{ path: '/contact', query: { topic: service!.title } }" class="btn-primary">Book a working session</NuxtLink>
            <NuxtLink :to="`/services/${service!.slug}`" class="btn-secondary">View service details</NuxtLink>
          </div>
        </div>
      </div>

      <div v-if="detail?.context" class="card space-y-3 md:space-y-4">
        <p class="text-sm font-semibold text-slate-800">Context / why this problem exists</p>
        <div class="space-y-2">
          <p v-for="paragraph in detail!.context.paragraphs" :key="paragraph" class="text-slate-700 leading-relaxed">
            {{ paragraph }}
          </p>
          <ul v-if="detail!.context.bullets" class="space-y-2 text-slate-700">
            <li v-for="item in detail!.context.bullets" :key="item" class="flex items-start gap-2">
              <span class="text-brand-600 font-semibold">▸</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-y-8 gap-x-6 md:gap-y-10 md:gap-x-10">
        <div v-if="detail?.whenRight" class="card h-full">
          <p class="text-sm font-semibold text-slate-800 mb-2">When this is the right solution</p>
          <ul class="space-y-2 text-slate-700">
            <li v-for="item in detail!.whenRight" :key="item" class="flex items-start gap-2">
              <span class="text-brand-600 font-semibold">▸</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div v-if="detail?.whenNotRight" class="card h-full">
          <p class="text-sm font-semibold text-slate-800 mb-2">When this is not the right solution</p>
          <ul class="space-y-2 text-slate-700">
            <li v-for="item in detail!.whenNotRight" :key="item" class="flex items-start gap-2">
              <span class="text-brand-600 font-semibold">▸</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="card space-y-3" v-if="detail?.approachIntro || detail?.approach">
        <p class="text-sm font-semibold text-slate-800 mb-2">How OUTLIER approaches it</p>
        <p v-if="detail?.approachIntro" class="text-slate-700 leading-relaxed">{{ detail!.approachIntro }}</p>
        <ul v-if="detail?.approach" class="space-y-2 text-slate-700">
          <li v-for="item in detail!.approach" :key="item" class="flex items-start gap-2">
            <span class="text-brand-600 font-semibold">▸</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="card space-y-3" v-if="detail?.changesAfter">
        <p class="text-sm font-semibold text-slate-800 mb-2">What changes after</p>
        <ul class="space-y-2 text-slate-700">
          <li v-for="item in detail!.changesAfter" :key="item" class="flex items-start gap-2">
            <span class="text-brand-600 font-semibold">▸</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="card flex flex-wrap items-center gap-3 bg-slate-50 border-slate-100">
        <NuxtLink :to="{ path: '/contact', query: { topic: service!.title } }" class="btn-primary">Book a working session</NuxtLink>
        <NuxtLink to="/services" class="btn-secondary">View more services</NuxtLink>
        <span v-if="detail?.cta" class="text-sm text-slate-700">Not sure? {{ detail!.cta }}</span>
      </div>

      <div class="card">
        <h2 class="text-xl font-semibold text-slate-900 mb-3">Recent proof points</h2>
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          <CaseStudyCard v-for="cs in relatedCases" :key="cs.id" :case-study="cs" />
        </div>
      </div>
    </div>
  </section>
</template>
