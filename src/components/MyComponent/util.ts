import { App, Plugin } from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-ch')

export const withInstall = <T>(comp: T) => {
  const c = comp as any
  c.install = function (app: App) {
    app.component(c.displayName || c.name, comp)
  }
  return comp as T & Plugin
}

export const getDate = () => moment().format('YYYY-MM-DD dddd')
export const getTime = () => moment().format('LTS')
