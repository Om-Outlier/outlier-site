<template>
  <div class="flex flex-col gap-3 mb-6 md:mb-8">
    <p v-if="eyebrow" class="badge-outline w-fit">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="text-lg text-slate-600 max-w-2xl">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description?: string; eyebrow?: string }>()
</script>
