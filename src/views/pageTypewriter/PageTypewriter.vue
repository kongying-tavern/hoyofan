<script setup lang="ts">
import PortraitLayout from './components/Portrait/PortraitLayout/PortraitLayout.vue'
import { useFont } from './hooks'

const { installFonts } = useFont()

installFonts()
</script>

<template>
  <PortraitLayout />
</template>
