<template>
  <icon-font :type="type" />
</template>
<script lang="ts" setup>
defineProps<{
  type: string
}>()
import { createFromIconfontCN } from '@ant-design/icons-vue'
const single = '//at.alicdn.com/t/c/font_2281133_3ic96wse7o9.js'
const multi = '//at.alicdn.com/t/c/font_2989005_iwmbbuwacg.js'
const IconFont = createFromIconfontCN({
  scriptUrl: [multi, single],
  extraCommonProps: { type: 'colorful' }
})
</script>
