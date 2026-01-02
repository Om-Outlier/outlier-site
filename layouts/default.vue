<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <NavBar />
    <main class="flex-1">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
