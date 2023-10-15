<script setup lang="ts">
import { CloseOutlined } from '@ant-design/icons-vue'
import { Button, Empty, Space } from 'ant-design-vue'
import { RecommandFunCard } from './components'

const funList = [
  {
    icon: 'upload',
    title: '上传文件',
    description: '手机电脑随时查看'
  },
  {
    icon: 'preview',
    title: '预览文件',
    description: '近百种格式文件均可预览'
  },
  {
    icon: 'backup',
    title: '本地文件备份到云端',
    description: '电脑文件轻松去备份'
  },
  {
    icon: 'sync',
    title: '本地与云端双向同步',
    description: '所有设备文件版本一致'
  }
]
</script>

<template>
  <div class="recommend-funs mb-24">
    <Space :size="[8, 16]" wrap>
      <RecommandFunCard v-bind="fun" v-for="fun in funList" :key="fun.title">
        {{ fun.description }}
      </RecommandFunCard>
    </Space>
    <Button class="rfc-btn-close" type="link" size="small" danger>
      <CloseOutlined />
    </Button>
  </div>
  <div class="page-hd flexable">
    <h4>最近文件</h4>
    <span class="flex-auto"></span>
    <Button class="page-addon" type="link" size="small">功能推荐</Button>
  </div>
  <Empty class="mt-40" />
</template>
<style lang="less" scoped>
.recommend-funs {
  position: relative;
  .ant-space {
    margin-bottom: 0 !important;
    :deep(.ant-space-item) {
      width: min(calc(100% - 0.24rem), 2.5rem);
      min-width: 2.5rem;
    }
  }
  .rfc-btn-close {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.page-hd {
  font-size: 0.14rem;
}
</style>
