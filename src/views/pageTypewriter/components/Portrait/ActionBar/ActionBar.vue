<script setup lang="ts">
import { computed } from 'vue'
import { getThemeColor } from '@/assets/effects/theme'
import CardBasic from '@/components/CardBasic/CardBasic.vue'
import DropdownArrow from '@/components/DropdownArrow/DropdownArrow.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import ImgIconKeyboard from '../../../assets/icon-keyboard.svg'
import { useKeyboardLayout } from '../../../hooks'
import varColor from './color.module.scss'

const { keyboardVisible, toggleKeyboard } = useKeyboardLayout()

const keyboardClass = computed(() =>
  keyboardVisible.value ? { active: true } : {},
)

const keyboardIconColor = computed(() =>
  keyboardVisible.value
    ? getThemeColor(varColor, 'keyboard-active-color')
    : getThemeColor(varColor, 'keyboard-default-color'),
)

const arrowColor = computed(() =>
  keyboardVisible.value
    ? getThemeColor(varColor, 'arrow-active-color')
    : getThemeColor(varColor, 'arrow-default-color'),
)
</script>

<template>
  <CardBasic
    class="action-bar-card cursor-pointer select-none"
    @click="toggleKeyboard()"
  >
    <div class="action-bar-wrapper flex flex-row" :class="{ ...keyboardClass }">
      <SvgIcon
        class="icon"
        :color="keyboardIconColor"
        :icon-src="ImgIconKeyboard"
      />
      <DropdownArrow
        class="arrow"
        :expanded="!keyboardVisible"
        :expanded-color="arrowColor"
        :collapsed-color="arrowColor"
      />
    </div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "@/assets/effects/theme.scss";
@use "./color.scss" as *;

$card-padding-y: 1.4rem;
$icon-width: 3.2rem;
$arrow-gap: 0.72rem;

@include theme.themeify($colors) {
  .action-bar-card {
    padding-top: $card-padding-y !important;
    padding-bottom: $card-padding-y !important;
  }

  .action-bar-wrapper {
    width: auto;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    .icon {
      width: $icon-width;
    }
    .arrow {
      margin-left: $arrow-gap;
    }
  }
}
</style>
