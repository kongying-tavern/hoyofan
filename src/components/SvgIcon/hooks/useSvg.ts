import type { MaybeRef } from 'vue'
import { shallowRef, toValue, watch } from 'vue'

export interface UseSvgOptions {
  src: MaybeRef<string>
}

export function useSvg(options: UseSvgOptions) {
  const svgHtml = shallowRef<string>('')

  async function load() {
    const url = toValue(options.src)
    if (!url) {
      svgHtml.value = ''
      return
    }
    try {
      const res = await fetch(url)
      svgHtml.value = await res.text()
    }
    catch {
      svgHtml.value = ''
    }
  }

  watch(
    () => toValue(options.src),
    load,
    { immediate: true },
  )

  return {
    svgHtml,
  }
}
