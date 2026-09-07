/// <reference types="vite/client" />

interface Env {
  readonly VITE_DIST_PATH: string
  readonly VITE_APP_TITLE: string
}

interface ImportMetaEnv extends Env {}
