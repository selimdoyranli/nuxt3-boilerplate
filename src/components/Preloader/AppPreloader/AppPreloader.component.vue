<template lang="pug">
.app-preloader(v-if="preloaderStore.preloader.isVisible")
  .app-preloader__inner
    AppLogo
    span.app-preloader__title Loading...
</template>

<script lang="ts" setup>
const preloaderStore = usePreloaderStore()

onMounted(async () => {
  await nextTick()

  preloaderStore.preloader.hide()
})
</script>

<style lang="scss" src="./AppPreloader.component.scss"></style>
