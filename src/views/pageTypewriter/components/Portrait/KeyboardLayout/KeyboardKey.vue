<script setup lang="ts">
import _ from "lodash";
import { ref, computed } from "vue";
import { useMousePressed } from "@vueuse/core";
import type { MaybeElementRef } from "@vueuse/core";
import { ConfigConvertDirectionEnum } from "@/shared";
import type { KeyboardKeyDecoration, KeyboardKeyOption } from "@/shared";
import { getThemeColor } from "@/assets/effects/theme";
import { useConfig, useTextInput, useKeyboardLayout } from "../../../hooks";
import varDim from "./dim.module.scss";
import varColor from "./color.module.scss";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const wrapperRef = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  options: KeyboardKeyOption;
}>();

const { config } = useConfig();
const { append } = useTextInput();
const { keyboardState } = useKeyboardLayout();

const widgetOptions = computed(() => {
  let defaultOptions: KeyboardKeyOption = {
    type: "key",
    keyCode: -1,
    input: undefined,
    displayMode: [],
    iconSizeTag: "1x",
  };
  return _.defaults({}, props.options, defaultOptions) as KeyboardKeyOption;
});

const keyDecorate = computed(() => {
  const defaultDecorate: KeyboardKeyDecoration = {
    visible: true,
    styles: {},
    classes: {},
  };

  if (widgetOptions.value.decorate === undefined) {
    return _.cloneDeep(defaultDecorate);
  } else if (typeof widgetOptions.value.decorate === "function") {
    const decorateVal = widgetOptions.value.decorate(
      keyboardState.value,
      config.value.font,
    );
    return _.defaults(decorateVal, defaultDecorate);
  } else {
    const decorateVal = widgetOptions.value.decorate;
    return _.defaults(decorateVal, defaultDecorate);
  }
});

const { pressed: isActive } = useMousePressed({
  target: wrapperRef as MaybeElementRef,
  drag: false,
});

const activeClass = computed(() => {
  return {
    active: isActive.value,
  };
});

const fontStyle = computed(() => {
  if (config.value.convertDirection === ConfigConvertDirectionEnum.TO_ENG) {
    return {
      fontFamily: config.value.font.tag,
    };
  }
  return {};
});

const layoutStyle = computed(() => {
  return {
    gridArea: widgetOptions.value.area,
  };
});

const keyIconColor = computed(() => {
  if (isActive.value) {
    return getThemeColor(varColor, "keyboard-key-icon-active-color");
  } else if (keyDecorate.value.classes?.hold) {
    return getThemeColor(varColor, "keyboard-key-icon-hold-color");
  } else {
    return getThemeColor(varColor, "keyboard-key-icon-default-color");
  }
});

const keyText = computed(() => {
  let text = "";
  if (widgetOptions.value.input === undefined) {
    text = widgetOptions.value.text!;
  } else if (typeof widgetOptions.value.input === "string") {
    text = widgetOptions.value.input!;
  }

  if (config.value.font.meta?.allowCapsLock) {
    if (keyboardState.value.capsLock) return text.toUpperCase();
    else return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
});

const keyPress = () => {
  if (typeof widgetOptions.value.input === "function") {
    widgetOptions.value.input(widgetOptions.value);
  } else {
    append(keyText.value);
  }
};
</script>

<template>
  <div
    ref="wrapperRef"
    v-if="keyDecorate.visible"
    :style="{ ...keyDecorate.styles, ...fontStyle, ...layoutStyle }"
    class="keyboard-component keyboard-widget keyboard-key cursor-pointer"
    :class="{ ...keyDecorate.classes, ...activeClass }"
    @click="keyPress()"
  >
    <div v-if="widgetOptions.displayMode.indexOf('text') !== -1" class="text">
      {{ keyText }}
    </div>
    <div v-if="widgetOptions.displayMode.indexOf('icon') !== -1" class="icon">
      <SvgIcon
        :icon-src="widgetOptions.icon!"
        :color="keyIconColor"
        :width="varDim[`keyboard-key-icon-width-${widgetOptions.iconSizeTag}`]"
        height="auto"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "./keyboard-key.scss" as *;
</style>
