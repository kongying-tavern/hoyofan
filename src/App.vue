<script setup lang="ts">
import { useDark } from '@vueuse/core'

useDark({
  selector: 'body',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})
</script>

<template>
  <RouterView />
</template>
