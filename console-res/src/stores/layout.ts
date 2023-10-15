import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const header = reactive({
    title: 'Res',
    logo: 'https://www.antdv.com/assets/logo.1ef800a8.svg'
  })

  const navMenuItems = reactive([])

  return { header, navMenuItems }
})
