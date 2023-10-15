import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
export declare type ThemeColor = keyof typeof import('./dark.token') &
  keyof typeof import('./light.token')
export declare type ThemeKey = 'dark' | 'light'
export declare type ThemeData = Partial<Record<ThemeKey, ThemeConfig>>
export declare type ThemeObject = ThemeData & {
  title?: string
}
