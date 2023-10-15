<script setup lang="ts">
import { AppAside } from '@components/layout'
import { useAppStore } from '@stores/app'
import { themeList } from '@themes/index'
import { Alert, BadgeRibbon, Button, ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { RouterView } from 'vue-router'

const app = useAppStore()
</script>
<template>
  <ConfigProvider :theme="themeList[app.color][app.theme]" :locale="zhCN">
    <div class="page-container">
      <div style="overflow: hidden">
        <BadgeRibbon text="限时优惠" color="#ff9800">
          <Alert banner>
            <template #icon>
              <InfoCircleOutlined />
            </template>
            <template #message>
              正在试用
              <span class="text-info"> 高级会员 </span>
              <strong>[100G空间 + 在线编辑 + 自动备份]</strong>, 体验还剩
              <span class="text-error">15</span>
              天,到期后将无法正常使用.
              <Button class="btn-upgrade" type="primary" size="small" danger>立即升级</Button>
            </template>
          </Alert>
        </BadgeRibbon>
      </div>
      <AppAside />
      <div class="page-wrap">
        <RouterView />
      </div>
    </div>
  </ConfigProvider>
</template>
<style scoped>
.ant-ribbon-wrapper {
  position: absolute;
  left: 2.56rem;
  right: 0;
  margin: 0 0.48rem;
  :deep(.ant-ribbon) {
    inset-inline-end: 0;
  }
}
.ant-alert {
  .btn-upgrade {
    border-radius: 0.12rem;
  }
}
</style>
