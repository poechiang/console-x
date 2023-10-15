import { AboutView } from '@views/about'
import { DebugView } from '@views/debug'
import { FileViewer } from '@views/files'
import { HomeView } from '@views/home'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: '首页' },
    component: HomeView
  },
  {
    path: '/files/:grp',
    name: 'files',
    component: FileViewer,

    meta: {
      icon: 'folder',
      title: '我的文件',
      children: [
        {
          path: '/files/file',
          name: 'file',
          meta: { title: '文件' }
        },
        {
          path: '/files/image',
          name: 'image',
          meta: { icon: 'pic', title: '图片' }
        },
        {
          path: '/files/music',
          name: 'music',
          meta: { title: '音乐' }
        },
        {
          path: '/files/video',
          name: 'video',
          meta: { title: '视频' }
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于' },
    component: AboutView
  },
  {
    path: '/debug',
    name: 'debug',
    meta: { title: '调试' },
    component: DebugView
  }
]
const router = createRouter({
  history: createWebHistory('res'),
  routes
})

export default router
