<script setup lang="ts">
import { Button, Menu } from 'ant-design-vue'
import type { SelectEventHandler } from 'ant-design-vue/es/menu/src/interface'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { routes } from '~/router'
import { router2MenuItem } from './router2MenuItem'

const router = useRouter()

router.afterEach((to) => {
  selectedKeys.value = to.path.split('/').filter(Boolean)
})

const menuItems = ref(routes.filter((r) => !!r.meta).map(router2MenuItem))
const selectedKeys = ref<string[]>(['home'])
const openKeys = ref<string[]>(['files'])
const handleSelect: SelectEventHandler = ({ keyPath }) => {
  router.push('/' + keyPath?.join('/')!)
}
</script>
<template>
  <div class="app-aside-wrap">
    <Button type="primary" block>新建</Button>
    <Button block>上传</Button>
    <Menu
      mode="inline"
      :items="menuItems"
      :open-keys="openKeys"
      :selected-keys="selectedKeys"
      @select="handleSelect"
    />
  </div>
</template>
<style scoped>
.app-aside-wrap {
  .ant-btn {
    margin: 0.04rem;
    margin-inline: 0.24rem 0.16rem;
    width: calc(100% - 0.3rem);
  }
}
</style>
