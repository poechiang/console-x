<script setup lang="ts">
import {
  AppstoreOutlined,
  ShareAltOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  UnorderedListOutlined
} from '@ant-design/icons-vue'
import { Avatar, Button, Dropdown, Menu, Segmented, Space } from 'ant-design-vue'
import { h, reactive, ref } from 'vue'

const views = reactive([
  { value: 'list', payload: { icon: h(UnorderedListOutlined) } },
  { value: 'tile', payload: { icon: h(AppstoreOutlined) } }
])
const currentView = ref('list')

const sortList = reactive([
  { key: 'file', label: '文件名', icon: () => h(SortDescendingOutlined) },
  { key: 'file', label: '大小', icon: () => h(SortAscendingOutlined) },
  { key: 'file', label: '修改日期', icon: () => h(SortAscendingOutlined) }
])
</script>
<template>
  <div class="flexable --row --cross-center">
    <Space size="small">
      <Button type="link" size="small">
        <template #icon><ShareAltOutlined /></template> 分享
      </Button>
      <Button type="link" size="small">
        <template #icon><ShareAltOutlined /></template> 下载
      </Button>
      <Button type="link" size="small">
        <template #icon><ShareAltOutlined /></template> 重命名
      </Button>
      <Button type="link" size="small">
        <template #icon><ShareAltOutlined /></template> 移动到
      </Button>
      <Button type="link" size="small">
        <template #icon><ShareAltOutlined /></template> 转入保险箱
      </Button>
      <Button type="link" size="small">
        <template #icon><ShareAltOutlined /></template> 复制
      </Button>
      <Button type="link" size="small" danger>
        <template #icon><ShareAltOutlined /></template> 删除
      </Button>
    </Space>
    <span class="flex-auto" />
    <Dropdown placement="bottomRight">
      <Button type="text" size="small" :icon="sortList[0].icon()">
        {{ sortList[0].label }}
      </Button>
      <template #overlay>
        <Menu :items="sortList" />
      </template>
    </Dropdown>

    <Segmented v-model:value="currentView" :options="views" small="small">
      <template #label="{ payload = {} }">
        <Avatar :icon="payload.icon" size="small" />
      </template>
    </Segmented>
  </div>
</template>
<style scoped lang="less">
.ant-segmented :deep(.ant-segmented-item-label) {
  min-height: 0.2rem;
  line-height: 0;
  padding: 0 0.04rem;
}
.ant-avatar {
  background-color: transparent;
  color: currentColor;
  font-size: 1em;
  height: 0.2rem;
  line-height: 0.2rem;
  width: 0.2rem;
}
</style>
