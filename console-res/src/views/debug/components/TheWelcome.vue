<script setup lang="ts">
import {
  CommunityIcon,
  DocumentationIcon,
  EcosystemIcon,
  SupportIcon,
  ToolingIcon
} from '@icons/common'
import { useLayoutStore } from '@stores/layout'
import { Button, Input, Space } from 'ant-design-vue'
import { computed, ref } from 'vue'
import WelcomeItem from './WelcomeItem.vue'

const layout = useLayoutStore()
const title = ref(layout.header.title)
const canModified = computed(() => title.value !== layout.header.title)
const handleTitleChange = () => {
  layout.header.title = title.value
}
</script>

<template>
  <WelcomeItem heading="Testing">
    <template #icon> <EcosystemIcon /> </template>
    <div class="mb-8">
      <label>修改web标题</label>
    </div>
    <Space>
      <Input name="title" v-model:value="title" />
      <Button type="primary" @click="handleTitleChange" :disabled="!canModified">
        Modify Web Title</Button
      >
    </Space>
  </WelcomeItem>

  <WelcomeItem heading="Documentation">
    <template #icon> <DocumentationIcon /> </template>
    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem heading="Tooling">
    <template #icon> <ToolingIcon /> </template>
    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
    recommended IDE setup is
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
    you need to test your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem heading="Community">
    <template #icon> <CommunityIcon /> </template>
    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
    Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
      >StackOverflow</a
    >. You should also subscribe to
    <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
    the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem heading="Support Vue">
    <template #icon> <SupportIcon /> </template>
    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>

export const meta = { title:'xxx' }
