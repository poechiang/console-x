import type { AliasToken } from 'ant-design-vue/es/theme/interface'

const commonToken: Partial<AliasToken> = {
  colorTextBase: '#353535',
  colorBgBase: '#f6f7f9',
  colorBgContainer: '#ffffff',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14'
}
const cyan: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#13c2c2'
}
const daybreak: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#1677ff'
}
const dust: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#f5222d'
}
const polar: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#00bd7e'
}
const purple: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#722ed1'
}

export { cyan, daybreak, dust, polar, purple }
