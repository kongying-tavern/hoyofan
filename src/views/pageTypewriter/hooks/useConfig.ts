import type { Config } from '@/shared'
import { ConfigConvertDirectionEnum, ConfigInputMethodEnum } from '@/shared'
import { useFont } from './useFont'

const { fontDefaultOption } = useFont()

const config = ref<Config>({
  inputMethod: ConfigInputMethodEnum.KEYBOARD,
  keyTransform: true,
  convertDirection: ConfigConvertDirectionEnum.FROM_ENG,
  font: fontDefaultOption,
})

export function useConfig() {
  return { config }
}
