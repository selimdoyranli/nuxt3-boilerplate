<template lang="pug">
.page.home-page
  h1 {{ message.title }}
  p {{ message.description }}

  NuxtLink(:to="navigation.link") {{ navigation.title }}
</template>

<script lang="ts" setup>
import type { WelcomeMessageTypes } from '@/types'
import type { HomeNavigationTypes } from './Home.page.types'

definePageMeta({
  layout: 'default'
})

const message = ref<WelcomeMessageTypes>({
  title: 'Home page',
  description: 'Welcome to home page'
})

const navigation = ref<HomeNavigationTypes>({
  title: 'Go to about page',
  link: '/about'
})
</script>

<style lang="scss" src="./Home.page.scss"></style>
