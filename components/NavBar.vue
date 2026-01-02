<template>
  <header class="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
    <nav class="relative max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 focus:outline-none focus-visible:outline-none">
        <img src="/images/logo-outlier.png" alt="OUTLIER" class="h-8 w-auto rounded-md border border-slate-200" />
        <span class="text-sm text-slate-600 font-medium hidden sm:inline">Thailand</span>
      </NuxtLink>
      <button
        class="md:hidden h-10 w-10 rounded-lg flex items-center justify-center border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition-colors"
        @click="open = !open"
        :aria-label="open ? 'Close menu' : 'Open menu'">
        <svg v-if="open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div
        :class="[
          'md:flex items-center gap-8',
          open ? 'absolute left-0 right-0 top-full bg-white border-t border-slate-200 shadow-lg px-4 py-4 md:static md:border-0 md:shadow-none' : 'hidden md:flex'
        ]">
        <div class="flex flex-col md:flex-row gap-3 md:gap-6 text-sm font-medium text-slate-700">
          <NuxtLink to="/services" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Services</NuxtLink>
          <NuxtLink to="/work" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Case Studies</NuxtLink>
          <NuxtLink to="/insights" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Insights</NuxtLink>
          <NuxtLink to="/careers" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Careers</NuxtLink>
          <NuxtLink to="/about" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">About</NuxtLink>
        </div>
        <NuxtLink
          to="/contact"
          class="btn-primary text-sm shadow-md hover:shadow-lg w-full md:w-auto justify-center">
          Talk to us
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
