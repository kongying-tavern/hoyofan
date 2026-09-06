import type { FontNode } from "./fontOptions";

export enum ConfigInputMethodEnum {
  TEXT = "text",
  KEYBOARD = "keyboard",
}

export type ConfigInputMethod =
  ConfigInputMethodEnum.TEXT | ConfigInputMethodEnum.KEYBOARD;

export enum ConfigConvertDirectionEnum {
  FROM_ENG = "from-eng",
  TO_ENG = "to-eng",
}

export type ConfigConvertDirection =
  ConfigConvertDirectionEnum.FROM_ENG | ConfigConvertDirectionEnum.TO_ENG;

export interface Config {
  inputMethod: ConfigInputMethod;
  keyTransform: boolean;
  convertDirection: ConfigConvertDirection;
  font: FontNode;
}
