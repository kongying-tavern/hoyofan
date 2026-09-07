<script setup lang="ts">
import type { FontNode } from '@/shared'
import { computed, ref } from 'vue'
import { getThemeColor } from '@/assets/effects/theme'
import CardBasic from '@/components/CardBasic/CardBasic.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import { useConfig, useFont, useFontSelector } from '../../../hooks'
import varColor from './color.module.scss'
import varDim from './dim.module.scss'

const wrapperRef = ref<HTMLDivElement | null>(null)

const { config } = useConfig()
const { fontOptions, findFontGroup } = useFont()
const { selectorVisible, closeSelector } = useFontSelector()

const dialogStyle = computed(() => {
  return {
    maxHeight: `calc(100vh - ${wrapperRef.value?.offsetTop}px - ${varDim['dialog-span-bottom']} - ${varDim['dialog-padding-y']} * 2)`,
  }
})

function changeFont(fontOption: FontNode) {
  config.value.font = fontOption
  closeSelector()
}

const selectedFontGroup = computed(() => findFontGroup(config.value.font.tag))

const fontGroupIconColor = computed(() => {
  return {
    default: getThemeColor(varColor, 'group-icon-default-color'),
    active: getThemeColor(varColor, 'group-icon-active-color'),
  }
})
</script>

<template>
  <div ref="wrapperRef" class="selector-wrapper select-none">
    <CardBasic v-if="selectorVisible" class="selector-dialog">
      <div class="content scrollbar flex flex-col" :style="{ ...dialogStyle }">
        <div
          v-for="(fontGroup, groupIndex) in fontOptions"
          :key="groupIndex"
          class="group flex flex-row"
          :class="{ active: fontGroup.id === selectedFontGroup }"
        >
          <div class="icon flex-none">
            <SvgIcon
              class="icon-img"
              :color="
                fontGroupIconColor[
                  fontGroup.id === selectedFontGroup ? 'active' : 'default'
                ]
              "
              :icon-src="fontGroup.icon!"
            />
          </div>
          <div class="separator flex-none">
&nbsp;
          </div>
          <div class="list flex-auto">
            <div
              v-for="(fontItem, itemIndex) in fontGroup.children"
              :key="itemIndex"
              class="item cursor-pointer"
              :class="{ active: fontItem.tag === config.font.tag }"
              @click="changeFont(fontItem)"
            >
              {{ fontItem.abbr || fontItem.label }}
            </div>
          </div>
        </div>
      </div>
    </CardBasic>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/effects/scrollbar.scss";
@use "@/assets/effects/theme.scss";
@use "./dim.scss" as *;
@use "./color.scss" as *;
@include scrollbar.scrollbar;

@include theme.themeify($colors) {
  .selector-wrapper {
    position: relative;
  }

  .selector-dialog {
    position: absolute;
    width: 100%;
    z-index: 100000000;
    padding: $dialog-padding-y $dialog-padding-x !important;

    .content {
      overflow-y: auto;
      row-gap: $list-gap;

      .group {
        align-items: center;

        &.active {
          .separator {
            background-color: theme.t("group-separator-active-color");
          }
        }

        .icon {
          width: $list-logo-space;
          display: flex;
          .icon-img {
            margin: 0 auto;
            width: $list-logo-width;
          }
        }
        .separator {
          width: $list-separator-width;
          align-self: stretch;
          background-color: theme.t("group-separator-default-color");
        }

        .list {
          padding-left: $list-item-indent;
          .item {
            font-size: $list-item-font-size;
            line-height: $list-item-line-height;
            overflow: hidden;
            word-break: break-all;
            color: theme.t("item-text-default-color");
            & + .item {
              margin-top: $list-item-gap;
            }
            &.active {
              color: theme.t("item-text-active-color");
            }
          }
        }
      }
    }
  }
}
</style>
