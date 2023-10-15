export declare type IAction = (key: string, value?: any, expire?: number) => any
export declare interface IStorageAction {
  local: IAction
  session: IAction
  cookie: IAction
}

const buildStorageAction =
  (storage: Storage): IAction =>
  (key: string, value?: any, expire?: number) => {
    if (null === value) {
      storage.removeItem(key)
    } else if (undefined === value) {
      const { value, expire } = JSON.parse(storage.getItem(key) || 'null') || {}
      if (expire && expire < Date.now()) {
        return null
      }
      return value
    } else {
      storage.setItem(key, JSON.stringify({ value, expire: expire || 0 }))
    }
  }

export const local = buildStorageAction(localStorage)
export const session = buildStorageAction(sessionStorage)
export const cookie = buildStorageAction(localStorage)
