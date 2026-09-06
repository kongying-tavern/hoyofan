<script setup lang="ts">
type ButtonSize = 'large' | 'medium' | 'small'
type ButtonType = 'default' | 'primary'

interface Props {
  clickable?: boolean
  size?: ButtonSize
  type?: ButtonType
}

const props = withDefaults(defineProps<Props>(), {
  clickable: true,
  size: 'medium',
  type: 'default',
})

const emits = defineEmits<{
  (e: 'click'): void
}>()

function onClick() {
  if (props.clickable) {
    emits('click')
  }
}
</script>

<template>
  <div
    class="btn-wrapper box-shadow"
    :class="{
      'cursor-pointer': clickable,
      [`size-${props.size}`]: true,
      [`type-${props.type}`]: true,
    }"
    @click="onClick()"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/effects/theme.scss";
@use "./dim.scss" as *;
@use "./color.scss" as *;
@use "@/assets/effects/shadow.scss";
@include shadow.box-shadow;

$btn-size-names: ("small", "medium", "large");
$btn-type-names: ("default", "primary");

@include theme.themeify($btn-colors) {
  .btn-wrapper {
    display: inline-block;
    font-size: $btn-font-size;
    line-height: $btn-line-height;
    text-align: center;
    border-radius: $btn-corner-radius;

    // Size Variants
    @each $size-name in $btn-size-names {
      &.size-#{$size-name} {
        padding: map.get($btn-padding, $size-name);
      }
    }

    // Color Variants
    @each $type-name in $btn-type-names {
      &.type-#{$type-name} {
        background-color: theme.t("btn-#{$type-name}-fill-color");
        color: theme.t("btn-#{$type-name}-text-color");
      }
    }
  }
}
</style>
