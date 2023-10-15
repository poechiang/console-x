import { local } from '@libs/storage'
import { toUnder } from '@libs/utils'
import { themeList } from '@themes/index'
import type { AliasToken } from 'ant-design-vue/es/theme/internal'
import { debounce } from 'lodash'
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

const APP_THEME = 'appTheme'
const APP_COLORING = 'appColoring'

/**
 * 当前主题变量写入 :root css variable
 * @param param0
 */
const updateThemeVariable = debounce((themeMapInst: any, coloring: AppColoring, key: AppTheme) => {
  // todo
  const rootElement = document.querySelector(':root') as HTMLHtmlElement
  const token: Partial<AliasToken> = themeMapInst[coloring][key].token

  Object.entries(token || {}).forEach(([k, v]) =>
    rootElement.style.setProperty(`--${toUnder(k)}`, v?.toString() || '')
  )
}, 100)

export const useAppStore = defineStore('app', () => {
  const theme = ref<AppTheme>('light')

  const color = ref<AppColoring>('polar')

  const globalSearch = reactive({
    placeholder: '模拟搜索,完整功能需在主应用中调试',
    keys: '',
    isLoading: true,
    options: []
  })
  const isDark = computed(() => theme.value === 'dark')
  const isLight = computed(() => theme.value === 'light')

  const toggleTheme = (currentTheme?: AppTheme) => {
    theme.value = currentTheme ?? (theme.value === 'light' ? 'dark' : 'light')
    updateThemeVariable(themeList, color.value, theme.value)
    local(APP_THEME, theme.value)
  }

  const toggleColoring = (currentColor: AppColoring) => {
    color.value = currentColor
    updateThemeVariable(themeList, color.value, theme.value)
    local(APP_COLORING, color.value)
  }
  toggleTheme(local(APP_THEME) || 'light')
  toggleColoring(local(APP_COLORING) || 'polar')
  return { theme, color, isDark, isLight, toggleTheme, toggleColoring, globalSearch }
})
