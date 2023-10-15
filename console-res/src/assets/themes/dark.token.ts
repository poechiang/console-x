import type { AliasToken } from 'ant-design-vue/es/theme/interface'

const commonToken: Partial<AliasToken> = {
  colorTextBase: '#ffffff',
  colorBgBase: '#000000',
  colorBgContainer: '#141414',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14'
}
const cyan: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#13a8a8'
}
const daybreak: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#1668dc'
}
const dust: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#d32029'
}
const polar: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#00bd7e'
}
const purple: Partial<AliasToken> = {
  ...commonToken,
  colorPrimary: '#642ab5'
}
export { cyan, daybreak, dust, polar, purple }
