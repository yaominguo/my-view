<template>
  <div class="card-wrapper">
    <div class="card-title">{{ title }}</div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Mode1',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped lang="stylus">
@import '../main.styl'
.card-wrapper
  background $card-bg
  .card-title
    display flex
    align-items center
    color $card-title-color
    font-size $card-title-size
    font-weight bold
    line-height 2
</style>
