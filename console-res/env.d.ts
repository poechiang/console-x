/// <reference types="vite/client" />

declare interface Window {
  __POWERED_BY_QIANKUN__?: boolean
  getConsoleContext<T = any>(sname: keyof typeof servicePool): T
}
declare type AppTheme = 'light' | 'dark'

declare type AppColoring = 'cyan' | 'daybreak' | 'dust' | 'polar' | 'purple'
