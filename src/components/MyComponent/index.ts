import { App } from 'vue'
import animate from 'animate.css'
import MyMap from './MyMap/my-map.vue'
import MyTitle from './MyTitle/my-title.vue'
import MyLoader from './MyLoader/my-loader.vue'
import MyAnimate from './MyAnimate/my-animate.vue'
import MyGrid from './MyGrid/my-grid.vue'
import MyCard from './MyCard/my-card.vue'
import MyCount from './MyCount/my-count.vue'
import MyModal from './MyModal/my-modal.vue'
import MyScroll from './MyScroll/my-scroll.vue'
import MyForm from './MyForm/my-form.vue'
import MyTable from './MyTable/my-table.vue'
import MyStep from './MyStep/my-step.vue'
import MyEmpty from './MyEmpty/my-empty.vue'
import { withInstall } from './util'

const components = [
  MyMap,
  MyTitle,
  MyAnimate,
  MyGrid,
  MyCard,
  MyCount,
  MyLoader,
  MyModal,
  MyScroll,
  MyForm,
  MyTable,
  MyStep,
  MyEmpty,
]

const install = (app: App): App => {
  app.use(animate)
  components.forEach((component) => app.use(withInstall(component)))
  return app
}

// 使用import {MyGrid} from './components/MyComponent'来按需引入个别组件
export {
  install,
  MyMap,
  MyTitle,
  MyAnimate,
  MyGrid,
  MyCard,
  MyCount,
  MyLoader,
  MyModal,
  MyScroll,
  MyForm,
  MyTable,
  MyStep,
  MyEmpty,
}

// 默认导出 —— 使用import MyComponent from './components/MyComponent'来引入所有组件
export default { install }
