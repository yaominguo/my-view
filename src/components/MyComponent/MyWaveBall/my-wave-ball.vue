<template>
  <div class="my-wave-ball" :style="{ width: size, height: size }">
    <div class="before" :style="{ top: `${percent}%` }" />
    <div class="after" :style="{ top: `${percent}%` }" />
    <p><MyCount :value="value" /> %</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import MyCount from '../MyCount/my-count.vue'

export default defineComponent({
  name: 'MyWaveBall',
  displayName: 'm-wave-ball',
  components: { MyCount },
  props: {
    value: {
      type: Number as PropType<number>,
      default: 0,
    },
    size: {
      type: String as PropType<string>,
      default: '.4rem',
    },
  },
  setup(props) {
    const percent = computed(() => 250 - props.value)
    return {
      percent,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-wave-ball
  position relative
  background transparent
  border-radius 50%
  overflow hidden
  border .02rem solid $green
  box-sizing content-box
  box-shadow 0 0 .08rem 0 #6EB629 inset
  transform translateZ(0)
  $center()
  p
    font-size .12rem
    font-weight bold
    z-index: 30;
  .before
  .after
    content ''
    position absolute
    width 200%
    height @width
    left 50%
    background $green
    opacity .5
    border-radius 40%
    animation rotate 10s ease infinite alternate
    z-index 20
  .after
    radius 30%
    opacity .8
    width 195%
    height @width
    animation rotate 20s linear infinite alternate
    z-index 10
@keyframes rotate {
  from {
    transform translate(-46%, -70%) rotate(0)
  }
  to {
    transform translate(-50%, -72%) rotate(360deg)
  }
}
</style>
