import { App } from 'vue'
import animate from 'animate.css'
import MyLoader from './MyLoader/my-loader.vue'
import MyAnimate from './MyAnimate/my-animate.vue'
import MyGrid from './MyGrid/my-grid.vue'
import MyCard from './MyCard/my-card.vue'
import MyCount from './MyCount/my-count.vue'
import { withInstall } from './util'
import './main.styl'

const components = [MyAnimate, MyGrid, MyCard, MyCount, MyLoader]

const install = (app: App): App => {
  app.use(animate)
  components.forEach((component) => app.use(withInstall(component)))
  return app
}

// 使用import {MyGrid} from './components/MyComponent'来按需引入个别组件
export { install, MyAnimate, MyGrid, MyCard, MyCount, MyLoader }

// 默认导出 —— 使用import MyComponent from './components/MyComponent'来引入所有组件
export default { install }
