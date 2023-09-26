<template lang="pug">
.layout.corporate-layout
  // App Preloader
  AppPreloader

  // App Header
  AppHeader

  // Layout Main
  .layout__inner
    .router-view
      pre Corporate Layout
      slot
</template>

<style lang="scss" src="./styles/Corporate.layout.scss"></style>
