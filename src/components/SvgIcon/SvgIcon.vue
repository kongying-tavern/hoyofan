<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { useSvg } from './hooks'

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

const { svgHtml } = useSvg({
  src: computed(() => props.iconSrc),
})

const wrapperStyle = computed(() => {
  const style: Record<string, string> = { color: props.color }
  if (props.width !== '100%')
    style.width = props.width
  if (props.height !== '100%')
    style.height = props.height
  return style
})
</script>

<template>
  <div class="svg-icon" :style="wrapperStyle" v-html="svgHtml"></div>
</template>

<style scoped lang="scss">
.svg-icon {
  display: inline-block;
  line-height: 0;

  :deep(svg) {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}
</style>
