<template>
  <div class="my-empty">
    <img src="/src/assets/images/no-data.png" />
    <p>— {{ text }} —</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyEmpty',
  displayName: 'm-empty',
  props: {
    text: {
      type: String,
      default: '暂无数据',
    },
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-empty
  $center()
  $full()
  flex-direction column
  color #ccc
  font-weight bold
  >img
    width .4rem
    height @width
</style>
