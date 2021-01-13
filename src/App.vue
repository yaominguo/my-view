<template>
  <m-grid
    class="grid-aaa"
    :template="['box1 box1 box3', 'box2 box2 box3']"
    columns="1fr 1fr 1fr"
    rows="1fr 1fr"
  >
    <m-card area="box1" title="哈哈哈哈">
      <m-count class="count" :value="value" auto-play></m-count>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
        dignissimos soluta itaque a pariatur harum cumque? Quisquam, neque
        consectetur totam distinctio quaerat adipisci facilis maiores excepturi
        repudiandae commodi ipsa.
      </p>
    </m-card>
    <div class="box2" area="box2"></div>
    <m-card
      area="box3"
      title="测试测试"
      enter="fadeInRight"
      leave="fadeOutRight"
      v-show="test"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed natus
      vero adipisci similique provident praesentium itaque minus accusantium
      eligendi, quas harum perspiciatis excepturi odio porro suscipit aut quo
      autem.
    </m-card>
  </m-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const test = ref(false)
    const value = ref(0)
    setTimeout(() => {
      test.value = true
      value.value = 9893939
    }, 3000)
    return {
      test,
      value,
    }
  },
})
</script>

<style lang="stylus">
html, body
  background rgba(0,0,0,0.5)
  width 100%
  height 100%
  user-select none
  font-size 16vh
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100%
  overflow hidden
  font-size .1rem
  line-height 1.5
  color #fff
</style>
