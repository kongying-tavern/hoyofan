import type {
  FontNode,
  KeyboardKeyDecoration,
  KeyboardKeyOption,
  KeyboardLayoutOption,
  KeyboardState,
} from '@/shared'
import { Key } from 'ts-keycode-enum'
import { ref } from 'vue'
import ImgBackspace from '../assets/key-backspace.svg'
import ImgCaps from '../assets/key-caps.svg'
import ImgEnter from '../assets/key-enter.svg'
import { useTextInput } from './useTextInput'

const { trimLast } = useTextInput()

const keyboardState = ref<KeyboardState>({
  capsLock: false,
})

function toggleCapsLock() {
  keyboardState.value.capsLock = !keyboardState.value.capsLock
}

const keyboardLayout: KeyboardLayoutOption = {
  colTemplate: 'repeat(20, .5fr)',
  rowTemplate: 'auto',
  areaTemplate: [
    'd1    d1    d2    d2    d3    d3    d4    d4    d5    d5    d6    d6    d7    d7    d8    d8    d9        d9        d0        d0',
    'q     q     w     w     e     e     r     r     t     t     y     y     u     u     i     i     o         o         p         p',
    '.     a     a     s     s     d     d     f     f     g     g     h     h     j     j     k     k         l         l         .',
    'caps  caps  z     z     x     x     c     c     v     v     b     b     n     n     m     m     backspace backspace backspace backspace',
    'space space space space space space space space space space space space space space space space enter     enter     enter     enter',
  ],
}

function numberDecorate(_keyboardState: KeyboardState, fontOption: FontNode): KeyboardKeyDecoration {
  const decorate: KeyboardKeyDecoration = {
    visible: true,
    styles: {},
    classes: {},
  }

  if (!fontOption.meta?.allowNumber) {
    decorate.visible = false
  }
  return decorate
}

const keyboardKeys: KeyboardKeyOption[] = [
  // 数字按键区
  {
    type: 'key',
    keyCode: [Key.One, Key.Numpad1],
    area: 'd1',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '1',
  },
  {
    type: 'key',
    keyCode: [Key.Two, Key.Numpad2],
    area: 'd2',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '2',
  },
  {
    type: 'key',
    keyCode: [Key.Three, Key.Numpad3],
    area: 'd3',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '3',
  },
  {
    type: 'key',
    keyCode: [Key.Four, Key.Numpad4],
    area: 'd4',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '4',
  },
  {
    type: 'key',
    keyCode: [Key.Five, Key.Numpad5],
    area: 'd5',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '5',
  },
  {
    type: 'key',
    keyCode: [Key.Six, Key.Numpad6],
    area: 'd6',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '6',
  },
  {
    type: 'key',
    keyCode: [Key.Seven, Key.Numpad7],
    area: 'd7',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '7',
  },
  {
    type: 'key',
    keyCode: [Key.Eight, Key.Numpad8],
    area: 'd8',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '8',
  },
  {
    type: 'key',
    keyCode: [Key.Nine, Key.Numpad9],
    area: 'd9',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '9',
  },
  {
    type: 'key',
    keyCode: [Key.Zero, Key.Numpad0],
    area: 'd0',
    decorate: numberDecorate,
    displayMode: ['text'],
    text: '0',
  },
  // 字母按键区
  {
    type: 'key',
    keyCode: Key.A,
    area: 'a',
    displayMode: ['text'],
    text: 'A',
  },
  {
    type: 'key',
    keyCode: Key.B,
    area: 'b',
    displayMode: ['text'],
    text: 'B',
  },
  {
    type: 'key',
    keyCode: Key.C,
    area: 'c',
    displayMode: ['text'],
    text: 'C',
  },
  {
    type: 'key',
    keyCode: Key.D,
    area: 'd',
    displayMode: ['text'],
    text: 'D',
  },
  {
    type: 'key',
    keyCode: Key.E,
    area: 'e',
    displayMode: ['text'],
    text: 'E',
  },
  {
    type: 'key',
    keyCode: Key.F,
    area: 'f',
    displayMode: ['text'],
    text: 'F',
  },
  {
    type: 'key',
    keyCode: Key.G,
    area: 'g',
    displayMode: ['text'],
    text: 'G',
  },
  {
    type: 'key',
    keyCode: Key.H,
    area: 'h',
    displayMode: ['text'],
    text: 'H',
  },
  {
    type: 'key',
    keyCode: Key.I,
    area: 'i',
    displayMode: ['text'],
    text: 'I',
  },
  {
    type: 'key',
    keyCode: Key.J,
    area: 'j',
    displayMode: ['text'],
    text: 'J',
  },
  {
    type: 'key',
    keyCode: Key.K,
    area: 'k',
    displayMode: ['text'],
    text: 'K',
  },
  {
    type: 'key',
    keyCode: Key.L,
    area: 'l',
    displayMode: ['text'],
    text: 'L',
  },
  {
    type: 'key',
    keyCode: Key.M,
    area: 'm',
    displayMode: ['text'],
    text: 'M',
  },
  {
    type: 'key',
    keyCode: Key.N,
    area: 'n',
    displayMode: ['text'],
    text: 'N',
  },
  {
    type: 'key',
    keyCode: Key.O,
    area: 'o',
    displayMode: ['text'],
    text: 'O',
  },
  {
    type: 'key',
    keyCode: Key.P,
    area: 'p',
    displayMode: ['text'],
    text: 'P',
  },
  {
    type: 'key',
    keyCode: Key.Q,
    area: 'q',
    displayMode: ['text'],
    text: 'Q',
  },
  {
    type: 'key',
    keyCode: Key.R,
    area: 'r',
    displayMode: ['text'],
    text: 'R',
  },
  {
    type: 'key',
    keyCode: Key.S,
    area: 's',
    displayMode: ['text'],
    text: 'S',
  },
  {
    type: 'key',
    keyCode: Key.T,
    area: 't',
    displayMode: ['text'],
    text: 'T',
  },
  {
    type: 'key',
    keyCode: Key.U,
    area: 'u',
    displayMode: ['text'],
    text: 'U',
  },
  {
    type: 'key',
    keyCode: Key.V,
    area: 'v',
    displayMode: ['text'],
    text: 'V',
  },
  {
    type: 'key',
    keyCode: Key.W,
    area: 'w',
    displayMode: ['text'],
    text: 'W',
  },
  {
    type: 'key',
    keyCode: Key.X,
    area: 'x',
    displayMode: ['text'],
    text: 'X',
  },
  {
    type: 'key',
    keyCode: Key.Y,
    area: 'y',
    displayMode: ['text'],
    text: 'Y',
  },
  {
    type: 'key',
    keyCode: Key.Z,
    area: 'z',
    displayMode: ['text'],
    text: 'Z',
  },
  // 其他按键区
  {
    type: 'key',
    keyCode: Key.Space,
    area: 'space',
    displayMode: ['text'],
    text: ' ',
  },
  {
    type: 'key',
    keyCode: Key.Enter,
    area: 'enter',
    input: '\n',
    displayMode: ['icon'],
    icon: ImgEnter,
    iconSizeTag: '2x',
  },
  {
    type: 'key',
    keyCode: Key.Backspace,
    area: 'backspace',
    input: () => {
      trimLast()
    },
    displayMode: ['icon'],
    icon: ImgBackspace,
    iconSizeTag: '2x',
  },
  {
    type: 'key',
    keyCode: Key.CapsLock,
    area: 'caps',
    decorate: (
      keyboardState: KeyboardState,
      fontOption: FontNode,
    ): KeyboardKeyDecoration => {
      const decorate: KeyboardKeyDecoration = {
        styles: {},
        classes: {},
      } as KeyboardKeyDecoration
      if (!fontOption.meta?.allowCapsLock) {
        decorate.styles.visibility = 'hidden'
      }
      decorate.classes.hold = keyboardState.capsLock
      return decorate
    },
    input: () => {
      toggleCapsLock()
    },
    displayMode: ['icon'],
    icon: ImgCaps,
  },
]

const keyboardVisible = ref(false)

function openKeyboard() {
  keyboardVisible.value = true
}

function closeKeyboard() {
  keyboardVisible.value = false
}

function toggleKeyboard() {
  keyboardVisible.value = !keyboardVisible.value
}

export function useKeyboardLayout() {
  return {
    keyboardState,
    toggleCapsLock,
    keyboardLayout,
    keyboardKeys,
    keyboardVisible,
    openKeyboard,
    closeKeyboard,
    toggleKeyboard,
  }
}
