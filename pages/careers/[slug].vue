<script setup lang="ts">
import { useHead, useRuntimeConfig } from '#imports'
import { jobListings } from '~/data/content'

const route = useRoute()
const job = jobListings.find(j => j.slug === route.params.slug)

if (!job) {
  throw createError({ statusCode: 404, statusMessage: 'Job not found' })
}

useHead({
  title: `${job.title} | Careers | OUTLIER`,
  meta: [{ name: 'description', content: job.summary }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/careers/${job.slug}` }]
})
</script>

<template>
  <section class="section">
    <div class="max-w-3xl mx-auto px-4 md:px-6 space-y-8">
      <div>
        <NuxtLink to="/careers" class="text-sm text-brand-600 hover:underline">← All openings</NuxtLink>
      </div>
      <div class="space-y-2">
        <p class="badge-outline w-fit">Careers</p>
        <h1 class="section-title">{{ job!.title }}</h1>
        <div class="flex gap-4 text-sm text-slate-500">
          <span>{{ job!.type }}</span>
          <span>·</span>
          <span>{{ job!.location }}</span>
        </div>
      </div>

      <p class="text-lg text-slate-700 leading-relaxed">{{ job!.summary }}</p>

      <div v-if="job!.detailSections?.length" class="space-y-4">
        <template
          v-for="section in job!.detailSections"
          :key="section.title">
          <div v-if="section.subsections?.length" class="space-y-4">
            <div class="space-y-3">
              <h2 class="text-xl font-semibold text-slate-900">{{ section.title }}</h2>
              <div v-if="section.body?.length" class="space-y-3 text-slate-700 leading-relaxed">
                <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
              </div>
              <ul v-if="section.items?.length" class="space-y-2 text-slate-700">
                <li v-for="item in section.items" :key="item" class="flex gap-2 items-start">
                  <span class="text-brand-600 font-semibold mt-0.5">▸</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="space-y-4">
              <div
                v-for="subsection in section.subsections"
                :key="subsection.title"
                class="card space-y-4">
                <h3 class="text-lg font-semibold text-slate-900">{{ subsection.title }}</h3>
                <div v-if="subsection.body?.length" class="space-y-3 text-slate-700 leading-relaxed">
                  <p v-for="paragraph in subsection.body" :key="paragraph">{{ paragraph }}</p>
                </div>
                <ul v-if="subsection.items?.length" class="space-y-2 text-slate-700">
                  <li v-for="item in subsection.items" :key="item" class="flex gap-2 items-start">
                    <span class="text-brand-600 font-semibold mt-0.5">▸</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-else class="card space-y-4">
            <h2 class="text-lg font-semibold text-slate-900">{{ section.title }}</h2>
            <div v-if="section.body?.length" class="space-y-3 text-slate-700 leading-relaxed">
              <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
            </div>
            <ul v-if="section.items?.length" class="space-y-2 text-slate-700">
              <li v-for="item in section.items" :key="item" class="flex gap-2 items-start">
                <span class="text-brand-600 font-semibold mt-0.5">▸</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </template>
      </div>

      <div v-if="job!.responsibilities?.length" class="card space-y-4">
        <h2 class="text-lg font-semibold text-slate-900">Responsibilities</h2>
        <ul class="space-y-2 text-slate-700">
          <li v-for="item in job!.responsibilities" :key="item" class="flex gap-2 items-start">
            <span class="text-brand-600 font-semibold mt-0.5">▸</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div v-if="job!.requirements?.length" class="card space-y-4">
        <h2 class="text-lg font-semibold text-slate-900">Requirements</h2>
        <ul class="space-y-2 text-slate-700">
          <li v-for="item in job!.requirements" :key="item" class="flex gap-2 items-start">
            <span class="text-brand-600 font-semibold mt-0.5">▸</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div v-if="job!.niceToHave?.length" class="card space-y-4">
        <h2 class="text-lg font-semibold text-slate-900">Nice to have</h2>
        <ul class="space-y-2 text-slate-700">
          <li v-for="item in job!.niceToHave" :key="item" class="flex gap-2 items-start">
            <span class="text-brand-600 font-semibold mt-0.5">▸</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="card space-y-4">
        <p class="text-slate-700 font-medium">Interested? Send us a short note with what you've shipped.</p>
        <NuxtLink
          :to="`/careers?role=${encodeURIComponent(job!.title)}`"
          class="btn-primary inline-block">
          Apply for this role
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
