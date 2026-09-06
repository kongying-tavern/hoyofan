<script setup lang="ts">
import { computed } from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import ImgIconDropdownArrow from './assets/icon-dropdown-arrow.svg'

const props = defineProps<{
  expanded: boolean
  expandedColor: string
  collapsedColor: string
}>()

const arrowClass = computed(() => {
  return {
    expanded: props.expanded,
  }
})

const arrowColor = computed(() =>
  props.expanded ? props.expandedColor : props.collapsedColor,
)
</script>

<template>
  <SvgIcon
    class="dropdown-arrow-wrapper"
    :class="{ ...arrowClass }"
    :color="arrowColor"
    :icon-src="ImgIconDropdownArrow"
  />
</template>

<style scoped lang="scss">
@use "./dim.scss" as *;

.dropdown-arrow-wrapper {
  width: $dropdown-arrow-width;
  height: $dropdown-arrow-height;

  &.expanded {
    transform: scaleY(-1);
  }
}
</style>
