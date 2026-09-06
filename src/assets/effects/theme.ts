import { get } from 'lodash-es'
import { useGlobalSettings } from '@/hooks'

const { globalSettings } = useGlobalSettings()

interface ThemeColorExportMap { [key: string]: string }

export function getThemeColor(colorMap: ThemeColorExportMap, colorKey: string) {
  const themeColorKey = `${globalSettings.value.theme || ''}--${colorKey}`
  const themeColorVal: string = get(colorMap, themeColorKey)
  return themeColorVal
}
