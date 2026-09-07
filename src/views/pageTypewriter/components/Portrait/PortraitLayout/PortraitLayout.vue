<script setup lang="ts">
import ActionBar from '../ActionBar/ActionBar.vue'
import FontSelector from '../FontSelector/FontSelector.vue'
import InputArea from '../InputArea/InputArea.vue'
import KeyboardLayout from '../KeyboardLayout/KeyboardLayout.vue'
import PreviewArea from '../PreviewArea/PreviewArea.vue'
import TransformSwitcher from '../TransformSwitcher/TransformSwitcher.vue'
</script>

<template>
  <main class="main-container flex flex-col fixed inset-0 gap-y-3 px-5 py-4">
    <TransformSwitcher class="flex-none" />
    <FontSelector class="flex-none" />
    <InputArea class="flex-none" />
    <PreviewArea class="flex-auto" />
    <KeyboardLayout class="flex-none" />
    <ActionBar class="flex-none" />
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/effects/theme.scss";
@use "./color.scss" as *;

@include theme.themeify($colors) {
  .main-container {
    background-color: theme.t("layout-bg-color");
  }
}
</style>
