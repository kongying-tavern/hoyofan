<script setup lang="ts">
type CardSize = 'large' | 'medium' | 'small'

interface Props {
  size?: CardSize
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
})
</script>

<template>
  <div
    class="card-wrapper box-shadow"
    :class="{
      [`size-${props.size}`]: true,
    }"
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

$card-size-names: ("small", "medium", "large");

@include theme.themeify($card-colors) {
  .card-wrapper {
    background-color: theme.t("card-bg-color");
    border-radius: $card-corner-radius;

    // Size Variants
    @each $size-name in $card-size-names {
      &.size-#{$size-name} {
        padding: map-get($card-padding-y, $size-name)
          map-get($card-padding-x, $size-name);
      }
    }
  }
}
</style>
