<template>
  <header class="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 focus:outline-none focus-visible:outline-none">
        <img src="/images/logo-outlier.png" alt="OUTLIER" class="h-10 w-auto rounded-md border border-slate-200" />
        <span class="text-sm text-slate-600 font-medium hidden sm:inline">Thailand</span>
      </NuxtLink>
      <button class="md:hidden" @click="open = !open" aria-label="Toggle menu">
        <span class="block w-6 h-[2px] bg-slate-900 mb-1"></span>
        <span class="block w-6 h-[2px] bg-slate-900"></span>
      </button>
      <div :class="['flex-1 md:flex items-center justify-end gap-8', open ? 'block mt-4 md:mt-0' : 'hidden md:flex']">
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 text-sm font-medium text-slate-700">
          <NuxtLink to="/services" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Services</NuxtLink>
          <NuxtLink to="/work" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Case Studies</NuxtLink>
          <NuxtLink to="/insights" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Insights</NuxtLink>
          <NuxtLink to="/careers" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">Careers</NuxtLink>
          <NuxtLink to="/about" class="px-1 pb-1 border-b-2 border-transparent hover:border-brand-500 hover:text-brand-600">About</NuxtLink>
        </div>
        <NuxtLink to="/contact" class="btn-primary text-sm shadow-md hover:shadow-lg">Talk to us</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
