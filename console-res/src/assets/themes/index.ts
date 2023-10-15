import { theme } from 'ant-design-vue'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import * as darkComponets from './dark.component'
import * as darkTokens from './dark.token'
import type { ThemeColor, ThemeKey } from './interface'
import * as lightComponets from './light.component'
import * as lightTokens from './light.token'
export * from './interface'

const themeNames = Object.keys({ ...darkTokens, ...lightTokens }) as ThemeColor[]
export const themeList = themeNames.reduce(
  (r, name) => {
    return {
      ...r,
      [name]: {
        dark: {
          token: darkTokens[name],
          components: { ...darkComponets },
          algorithm: theme.darkAlgorithm
        },
        light: {
          token: lightTokens[name],
          components: { ...lightComponets },
          algorithm: theme.defaultAlgorithm
        }
      }
    }
  },
  {} as Record<ThemeColor, Record<ThemeKey, ThemeConfig>>
)
