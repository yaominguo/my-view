<template>
  <m-animate :enter="enter" :leave="leave">
    <div class="my-card">
      <component :is="card" :title="title">
        <slot />
      </component>
    </div>
  </m-animate>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import mode1 from './mode1.vue'
import '../main.styl'

export default defineComponent({
  name: 'MyCard',
  displayName: 'm-card',
  components: {
    mode1,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: '1',
    },
    enter: {
      type: String,
      default: 'fadeInLeft',
    },
    leave: {
      type: String,
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
  $blur()
  width initial
  height initial
  overflow hidden
  :deep(.card-wrapper)
    $full()
    padding .05rem .1rem
    position relative
  :deep(.card-content)
    height calc(100% - .2rem)
    overflow-y auto
    overflow-x hidden
</style>
