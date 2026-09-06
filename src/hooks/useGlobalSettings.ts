import type { GlobalSettings } from '@/shared'
import { useColorMode } from '@vueuse/core'

const { system, store } = useColorMode()

const themeKey = computed(() =>
  store.value === 'auto' ? system.value : store.value,
)

const globalSettings: Ref<GlobalSettings> = ref({
  theme: themeKey.value,
})

export function useGlobalSettings() {
  return { globalSettings }
}
