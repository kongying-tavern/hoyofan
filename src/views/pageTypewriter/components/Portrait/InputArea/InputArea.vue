<script setup lang="ts">
import { computed } from 'vue'
import { getThemeColor } from '@/assets/effects/theme'
import CardBasic from '@/components/CardBasic/CardBasic.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import TextAreaBasic from '@/components/TextAreaBasic/TextAreaBasic.vue'
import { ConfigConvertDirectionEnum } from '@/shared'
import ImgIconClose from '../../../assets/icon-close.svg'
import { useConfig, useTextInput } from '../../../hooks'
import varColor from './color.module.scss'

const { config } = useConfig()
const { text, clear } = useTextInput()

const fontStyle = computed(() => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.TO_ENG) {
    return {
      fontFamily: config.value.font.tag,
    }
  }
  return {}
})

const clearButtonColor = computed(() =>
  getThemeColor(varColor, 'clear-btn-color'),
)
</script>

<template>
  <CardBasic class="textarea flex flex-row gap-x-4">
    <TextAreaBasic
      v-model="text"
      class="flex-auto"
      :style="{ ...fontStyle }"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="输入内容"
    />
    <div class="action-wrapper flex-none">
      <SvgIcon
        class="action-button"
        :color="clearButtonColor"
        :icon-src="ImgIconClose"
        @click="clear()"
      />
    </div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "@/assets/effects/theme.scss";
@use "../assets/action-wrapper.scss";
@use "./color.scss" as *;
@include action-wrapper.action-wrapper;

@include theme.themeify($colors) {
  .textarea {
    &:focus-within {
      outline: 0.1rem solid theme.t("focus-outline-color");
    }
  }
}
</style>
