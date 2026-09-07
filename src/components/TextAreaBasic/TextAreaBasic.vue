<script setup lang="ts">
import type { InputAutoSize } from 'element-plus'

interface Props {
  modelValue?: string
  rows?: number
  autosize?: InputAutoSize
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const emits = defineEmits<{
  (e: 'update:modelValue', text: string): void
}>()

function onChange(newText: string) {
  emits('update:modelValue', newText)
}
</script>

<template>
  <el-input
    class="textarea-wrapper scrollbar"
    :model-value="modelValue"
    :rows="rows"
    :autosize="autosize"
    type="textarea"
    @input="onChange"
  />
</template>

<style scoped lang="scss">
@use "@/assets/effects/theme.scss";
@use "./dim.scss" as *;
@use "./color.scss" as *;
@use "@/assets/effects/scrollbar.scss";
@include scrollbar.scrollbar;

@include theme.themeify($textarea-colors) {
  .textarea-wrapper {
    & :deep(.el-textarea__inner) {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      overflow: auto;
      box-shadow: none;
      resize: none;
      font-size: $textarea-font-size;
      line-height: $textarea-line-height;
      color: theme.t("textarea-text-color");
      background-color: theme.t("textarea-bg-color");

      &::placeholder {
        font-size: $textarea-font-size;
        line-height: $textarea-line-height;
        color: theme.t("textarea-placeholder-color");
      }
    }
  }
}
</style>
