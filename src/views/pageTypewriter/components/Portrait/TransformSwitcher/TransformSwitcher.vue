<script setup lang="ts">
import { computed } from 'vue'
import { getThemeColor } from '@/assets/effects/theme'
import ButtonBasic from '@/components/ButtonBasic/ButtonBasic.vue'
import DropdownArrow from '@/components/DropdownArrow/DropdownArrow.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import { ConfigConvertDirectionEnum } from '@/shared'
import ImgIconContentArrow from '../../../assets/icon-convert-arrow.svg'
import { useConfig, useFontSelector } from '../../../hooks'
import varColor from './color.module.scss'

const { config } = useConfig()
const { selectorVisible, toggleSelector } = useFontSelector()

const directionClass = computed(() => {
  return {
    [config.value.convertDirection]: true,
  }
})

const convertArrowColor = computed(() =>
  getThemeColor(varColor, 'conv-arrow-color'),
)

const selectorArrowColor = computed(() =>
  getThemeColor(varColor, 'dropdown-arrow-color'),
)

function switchConvertDirection() {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.FROM_ENG) {
    config.value.convertDirection = ConfigConvertDirectionEnum.TO_ENG
  }
  else {
    config.value.convertDirection = ConfigConvertDirectionEnum.FROM_ENG
  }
}
</script>

<template>
  <div class="switcher-wrapper flex select-none" :class="{ ...directionClass }">
    <ButtonBasic
      class="flex-auto"
      size="large"
      type="primary"
      @click="toggleSelector()"
    >
      {{ config.font.abbr || config.font.label }}
      <DropdownArrow
        class="dropdown-arrow"
        :expanded="selectorVisible"
        :expanded-color="selectorArrowColor"
        :collapsed-color="selectorArrowColor"
      />
    </ButtonBasic>
    <SvgIcon
      class="conv-arrow flex-none cursor-pointer"
      :icon-src="ImgIconContentArrow"
      :color="convertArrowColor"
      @click="switchConvertDirection()"
    />
    <ButtonBasic class="flex-auto" size="large" :clickable="false">
      英语
    </ButtonBasic>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;

$column-gap: 1.72rem;
$dropdown-arrow-gap: 0.36rem;
$conv-arrow-width: 2.96rem;

.switcher-wrapper {
  column-gap: $column-gap;
  justify-content: center;

  &.from-eng {
    flex-direction: row-reverse;
  }
  &.to-eng {
    flex-direction: row;
  }

  .dropdown-arrow {
    margin-left: $dropdown-arrow-gap;
  }

  .conv-arrow {
    width: $conv-arrow-width;
  }
}
</style>
