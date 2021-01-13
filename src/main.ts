import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from '@/components/MyComponent'
import 'normalize.css'

createApp(App).use(MyComponent).mount('#app')
