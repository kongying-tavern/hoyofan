import type { FontNode } from './fontOptions'

export interface KeyboardLayoutOption {
  rowTemplate: string
  colTemplate: string
  areaTemplate?: string[]
}

export type KeyboardKeyDisplayType = 'text' | 'icon'

export type KeyboardKeyType = 'key'

export interface KeyboardKeyDecoration {
  visible: boolean
  styles: { [key: string]: string }
  classes: { [key: string]: boolean }
}

export interface KeyboardKeyOption {
  type: KeyboardKeyType
  keyCode: number | number[]
  input?: string | ((opt: KeyboardKeyOption) => void)
  area?: string
  decorate?:
    | KeyboardKeyDecoration
    | ((
      keyboardState: KeyboardState,
      fontOption: FontNode,
    ) => KeyboardKeyDecoration)
  displayMode: KeyboardKeyDisplayType[]
  text?: string
  icon?: string
  iconSizeTag?: string
}

export interface KeyboardState {
  capsLock: boolean
}
