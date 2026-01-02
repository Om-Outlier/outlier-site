<template>
  <footer class="border-t border-slate-100 bg-slate-50 py-10 mt-16">
    <div class="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-8">
      <div class="col-span-2 flex flex-col gap-3">
        <p class="text-xl font-semibold text-slate-900">OUTLIER</p>
        <p class="text-sm text-slate-600 max-w-md">We build and run marketing and commercial platforms that ship fast, stay measurable, and keep growing.</p>
        <div class="flex gap-3 text-sm text-slate-700">
          <NuxtLink to="/privacy" class="hover:text-brand-600">Privacy Policy</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-brand-600">Contact</NuxtLink>
        </div>
      </div>
      <div>
        <p class="text-sm font-semibold text-slate-900 mb-3">Offices</p>
        <a
          href="https://maps.app.goo.gl/dpr6JRs2W38AU1DC7"
          class="text-sm text-slate-600 hover:text-brand-600"
          target="_blank"
          rel="noopener">
          944, Unit 701, 7th Floor, Mitrtown Office Tower, Rama 4 Road, Wangmai, Pathumwan, Bangkok, 10330, TH
        </a>
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-sm font-semibold text-slate-900">Stay close</p>
        <a
          href="https://www.linkedin.com/company/outliertransformation"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
            <path
              d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.25 18h-3v-9h3Zm-1.5-10.38a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48ZM19.5 18h-3v-4.74c0-1.26-.45-2.13-1.6-2.13-.87 0-1.39.58-1.62 1.14-.08.19-.1.45-.1.72V18h-3s.04-7.87 0-8.69h3v1.23a3 3 0 0 1 2.7-1.49c1.97 0 3.52 1.29 3.52 4.07Z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 md:px-6 mt-8 text-xs text-slate-500">© {{ new Date().getFullYear() }} OUTLIER (Thailand). All rights reserved.</div>
  </footer>
</template>
