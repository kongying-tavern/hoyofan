<script setup lang="ts">
import { computed, withDefaults } from 'vue'

interface Props {
  iconSrc: string
  color: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
})

const iconStyle = computed(() => {
  return {
    maskImage: `url(${props.iconSrc})`,
    backgroundColor: props.color,
  }
})

const placeholderStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
  }
})
</script>

<template>
  <div class="svg-icon" :style="{ ...iconStyle }">
    <img :style="{ ...placeholderStyle }" :src="iconSrc" />
  </div>
</template>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
  position: relative;
  overflow: hidden;
  mask-position: center;
  mask-size: 100% 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    visibility: hidden;
  }
}
</style>
