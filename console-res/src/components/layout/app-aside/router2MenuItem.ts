import type { ItemType } from 'ant-design-vue'
import type { RouteRecordRaw } from 'vue-router'
import { ColorFont } from '~/components/common'

export const router2MenuItem = ({
  children,
  name,
  meta = {}
}: RouteRecordRaw): ItemType & { children?: any } => {
  const menuItem: ItemType = {
    key: name as string,
    icon: () => h(ColorFont, { type: `font-nav-${meta?.icon ?? name}` }),
    label: meta?.title
  }
  if (!children?.length && !meta.children) {
    return menuItem
  }
  return { ...menuItem, children: (children || (meta.children as [])).map(router2MenuItem) }
}
