<template>
  <div class="my-title">
    <img src="/src/assets/images/title-bg.png" class="bg" />
    <div class="date">{{ date }} {{ time }}</div>
    <h1><slot /></h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from 'vue'
import { getDate, getTime } from '../util'

export default defineComponent({
  name: 'MyTitle',
  displayName: 'm-title',
  setup() {
    const date = ref(getDate())
    const time = ref('')
    const timer = ref<number | null>(null)
    timer.value = setInterval(() => {
      time.value = getTime()
    })
    onBeforeUnmount(() => {
      clearInterval(Number(timer))
      timer.value = null
    })
    return {
      date,
      time,
      timer,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-title
  $full()
  $center()
  position relative
  background-size cover
  background-position center
  font-weight bold
  .date
    z-index 2
    position absolute
    top .07rem
    right 3%
  .bg
    position absolute
    $full()
    top 0
    left 0
  h1
    z-index 2
    background-clip text
    -webkit-background-clip text
    -webkit-text-fill-color transparent
    background-image linear-gradient(to bottom, #fff, #B3EBFF)
    font-size .2rem
    letter-spacing .05rem
</style>
