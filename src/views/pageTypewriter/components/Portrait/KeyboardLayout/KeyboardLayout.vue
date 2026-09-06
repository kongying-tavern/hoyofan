<script setup lang="ts">
import _ from 'lodash'
import { computed } from 'vue'
import CardBasic from '@/components/CardBasic/CardBasic.vue'
import { useKeyboardLayout } from '../../../hooks'
import KeyboardKey from './KeyboardKey.vue'

const { keyboardLayout, keyboardKeys, keyboardVisible } = useKeyboardLayout()

const layoutStyles = computed(() => {
  let areaTemplate!: string
  if (
    !_.isNil(keyboardLayout.areaTemplate)
    && !_.isEmpty(keyboardLayout.areaTemplate)
  ) {
    areaTemplate = _.chain(keyboardLayout.areaTemplate)
      .map(v => `'${v}'`)
      .join(' ')
      .value()
  }

  return {
    gridTemplateColumns: keyboardLayout.colTemplate,
    gridTemplateRows: keyboardLayout.rowTemplate,
    gridTemplateAreas: areaTemplate,
  }
})
</script>

<template>
  <CardBasic v-if="keyboardVisible" class="keyboard-card select-none">
    <div class="keyboard-wrapper" :style="{ ...layoutStyles }">
      <KeyboardKey
        v-for="(keyOptions, index) in keyboardKeys"
        :key="index"
        :options="keyOptions"
      />
    </div>
  </CardBasic>
</template>

<style scoped lang="scss">
@use "./keyboard-layout.scss" as *;
</style>
