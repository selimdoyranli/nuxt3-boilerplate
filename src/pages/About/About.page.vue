<template lang="pug">
.page.about-page
  h1 {{ message.title }}
  p {{ message.description }}

  NuxtLink(:to="navigation.link") {{ navigation.title }}
</template>

<script lang="ts" setup>
import type { WelcomeMessageTypes } from '@/types'
import type { AboutNavigationTypes } from './About.page.types'

definePageMeta({
  layout: 'corporate'
})

const message = ref<WelcomeMessageTypes>({
  title: 'About page',
  description: 'Welcome to about page'
})

const navigation = ref<AboutNavigationTypes>({
  title: 'Go to home page',
  link: '/'
})
</script>

<style lang="scss" src="./About.page.scss"></style>
