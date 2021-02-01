<template>
  <div class="my-scroll" @mouseenter.prevent="stop" @mouseleave.prevent="start">
    <div ref="contentRef">
      <slot />
    </div>
    <div v-if="isNeedMockContent" ref="mockContentRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  nextTick,
} from 'vue'

export default defineComponent({
  name: 'MyScroll',
  displayName: 'm-scroll',
  props: {
    length: {
      type: Number as PropType<number>,
      required: true,
    },
    limit: {
      type: Number as PropType<number>,
      required: true,
    },
    duration: {
      type: Number as PropType<number>,
      default: 4000,
    },
    speed: {
      type: Number as PropType<number>,
      default: 50,
    },
    mode: {
      type: [Number, String] as PropType<number | string>,
      default: 1,
    },
    step: {
      type: Number as PropType<number>,
      default: 0,
    },
  },
  setup(props) {
    const contentRef = ref<null | HTMLElement>(null)
    const mockContentRef = ref<null | HTMLElement>(null)
    const timer = ref<null | number>(null)
    const index = ref(0)
    const isNeedMockContent = computed(
      () => props.length <= 100 && props.length >= props.limit
    )
    const start = () => {
      if (props.length < props.limit) return
      if (+props.mode === 2) {
        startMode2()
      } else {
        startMode1()
      }
    }
    const stop = () => {
      clearInterval(Number(timer.value))
      timer.value = null
    }
    const startMode1 = () => {
      const content = contentRef.value
      const mockContent = mockContentRef.value

      if (!content) return
      let height = content.offsetHeight
      timer.value = +setInterval(() => {
        if (height <= 0) {
          height = content.offsetHeight
          return
        }
        if (index.value < height) {
          index.value += 1
        } else {
          index.value = 0
        }
        content.style.transform = `translateY(${-index.value}px)`
        mockContent &&
          (mockContent.style.transform = `translateY(${-index.value}px)`)
      }, props.speed)
    }
    const startMode2 = () => {
      if (!props.step) {
        console.error('MyScroll mode2模式需要step参数！')
        return
      }
      const content = contentRef.value
      const mockContent = mockContentRef.value
      if (!content) return
      const len = (content.children && content.children.length) || 0
      timer.value = +setInterval(() => {
        if (index.value < len) {
          index.value += 1
          content.style.transition = 'transform 0.5s ease-in-out'
          mockContent &&
            (mockContent.style.transition = 'transform 0.5s ease-in-out')
        } else {
          index.value = 0
          content.style.transition = 'none'
          mockContent && (mockContent.style.transition = 'none')
        }
        content.style.transform = `translateY(${-props.step * index.value}rem)`
        mockContent &&
          (mockContent.style.transform = `translateY(${
            -props.step * index.value
          }rem)`)
      }, props.duration)
    }
    onMounted(() => {
      start()
    })
    onBeforeUnmount(() => {
      stop()
    })
    watch(
      () => props.length,
      async () => {
        stop()
        index.value = 0
        const content = contentRef.value
        const mockContent = mockContentRef.value
        content && (content.style.transform = 'translateY(0)')
        mockContent && (mockContent.style.transform = 'translateY(0)')
        await nextTick()
        start()
      }
    )
    return {
      isNeedMockContent,
      start,
      stop,
      contentRef,
      mockContentRef,
      timer,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-scroll
  $full()
  overflow hidden
  z-index 99
</style>
