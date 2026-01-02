<script setup lang="ts">
import { useHead, useRuntimeConfig } from '#imports'

useHead({
  title: 'Privacy Policy | OUTLIER',
  meta: [{ name: 'description', content: 'Privacy commitments for OUTLIER website visitors and clients.' }],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.siteUrl}/privacy` }]
})
</script>

<template>
  <section class="section">
    <div class="max-w-4xl mx-auto px-4 md:px-6 space-y-4">
      <h1 class="section-title">Privacy Policy</h1>
      <p class="text-slate-700">We collect only the information needed to respond to your inquiries and deliver our services. This includes contact details submitted through forms and necessary usage data to keep the platform secure and performant.</p>
      <ul class="list-disc pl-5 text-slate-700 space-y-2">
        <li>Contact form submissions are stored securely and used solely to follow up with you.</li>
        <li>We do not sell your data. Access is limited to authorized OUTLIER personnel.</li>
        <li>We may use aggregated, anonymized data for performance analytics and service improvement.</li>
        <li>If you want your data updated or removed, contact us and we will process the request promptly.</li>
      </ul>
      <p class="text-slate-700">For any privacy questions, please reach out via the contact form.</p>
    </div>
  </section>
</template>
