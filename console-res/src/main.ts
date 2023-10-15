import '@styles/main.less'
import 'ant-design-vue/dist/reset.css'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'

import App from './App.vue'

import { router2MenuItem } from './components/layout/app-aside/router2MenuItem'
import router, { routes } from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
const render = (props?: any) => {
  app.mount(props?.container ?? 'app-res-wrapper')
}
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  window.onload = () => {
    const layoutSrv = window.getConsoleContext?.('layout')
    layoutSrv.header.logo = 'https://next.antdv.com/assets/logo.1ef800a8.svg'
    layoutSrv.header.title = 'Res'
  }

  render()
} else {
  document.querySelector(':root')?.setAttribute('res-micro-app', '')

  renderWithQiankun({
    bootstrap: () => {
      // TODO
      console.log('bootstrap function of console-res base on vue3 | vite')
    },
    mount: () => {
      const layoutSrv = window.getConsoleContext?.('layout')
      layoutSrv.asider.menuItems = routes.filter((r) => !!r.meta).map(router2MenuItem)
      render()
    },

    unmount: app.unmount,
    update: () => {}
  })
}
