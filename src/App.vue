<template>
  <Main />
  <m-loader v-if="showLoading" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Main from './view/main.vue'
import store from '@/store'

export default defineComponent({
  name: 'App',
  components: { Main },
  setup() {
    const showLoading = computed(() => store.state.showLoading)
    return {
      showLoading,
    }
  },
})
</script>

<style lang="stylus">
@font-face
  font-family DIN
  src url(./assets/font/DIN-Medium.otf)
@font-face
  font-family Pangmenzhengdao
  src url(./assets/font/pangmenzhengdao.ttf)

html, body
  background rgba(0,0,0,0.5)
  font-family DIN, Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100%
  user-select none
  font-size 16vh
  line-height 1.5
  p
    margin 0
#app
  width 100%
  height 100%
  overflow hidden
  font-size .1rem
  background url('/src/assets/images/background.jpg') center/cover no-repeat
  color #fff

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: .05rem;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background:rgba(91, 213, 255, 0.3)
  -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:rgba(91, 213, 255, 0.3)
}
</style>
