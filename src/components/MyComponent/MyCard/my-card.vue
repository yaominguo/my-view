<template>
  <MyAnimate :enter="enter" :leave="leave">
    <div class="my-card">
      <component :is="card" :title="title">
        <slot />
      </component>
    </div>
  </MyAnimate>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import MyAnimate from '../MyAnimate/my-animate.vue'
import mode1 from './mode1.vue'
import '../main.styl'

export default defineComponent({
  name: 'MyCard',
  displayName: 'm-card',
  components: {
    MyAnimate,
    mode1,
  },
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    mode: {
      type: String as PropType<string>,
      default: '1',
    },
    enter: {
      type: String as PropType<string>,
      default: 'fadeInLeft',
    },
    leave: {
      type: String as PropType<string>,
      default: 'fadeOutLeft',
    },
  },
  setup(props) {
    const card = computed(() => {
      switch (props.mode) {
        case '1':
          return mode1
        default:
          return mode1
      }
    })
    return {
      card,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-card
  $full()
  width initial
  height initial
  overflow hidden
  z-index 10
  :deep(.card-wrapper)
    $full()
    // padding .05rem .1rem
    position relative
  :deep(.card-title)
    max-height .2rem
  :deep(.card-content)
    height calc(100% - .2rem)
    overflow-y auto
    overflow-x hidden
    $blur()
</style>
