<script setup lang="ts">
import { ColorFont } from '@components/common'
import { Card, CardMeta } from 'ant-design-vue'
import type { VNode } from 'vue'
defineProps<{
  title: string
  icon: string
}>()
defineSlots<{
  default: () => VNode
}>()
</script>
<template>
  <Card size="small">
    <template #cover>
      <ColorFont :type="`icon-${icon}`" />
    </template>
    <CardMeta>
      <template #title>
        <h4>{{ title }}</h4>
      </template>
      <template #description> <slot></slot> </template>
    </CardMeta>
  </Card>
</template>
<style lang="less" scoped>
.ant-card {
  display: flex;
  height: 100%;
  align-items: center;
  line-height: 1;
  :deep(.ant-card-cover) {
    font-size: 0.5rem;
    margin-left: 0.1rem;
  }
  :deep(.ant-card-meta-title) {
    font-size: 0.14rem;
  }
  :deep(.ant-card-meta-description) {
    font-size: 0.12rem;
  }
}
</style>
