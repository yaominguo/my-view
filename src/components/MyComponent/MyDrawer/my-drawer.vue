<template>
  <teleport to="body">
    <MyAnimate enter="fadeInRight" leave="fadeOutRight">
      <div v-if="modelValue" class="my-drawer" :style="{ width: width }">
        <img
          src="@/assets/images/close-btn3.png"
          class="close-btn"
          draggable="false"
          @click="closeDrawer"
        />
        <div class="content"><slot /></div>
      </div>
    </MyAnimate>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MyAnimate from '../MyAnimate/my-animate.vue'

export default defineComponent({
  name: 'MyDrawer',
  displayName: 'm-drawer',
  components: { MyAnimate },
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    width: {
      type: String as PropType<string>,
      default: '49vw',
    },
    maskClosable: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
  },
  emits: ['update:modelValue', 'close'],
  setup(_, ctx) {
    const closeDrawer = () => {
      ctx.emit('update:modelValue', false)
      ctx.emit('close')
    }
    return {
      closeDrawer,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-drawer
  background url('@/assets/images/drawer-bg.png') 100% / 100% 100% no-repeat
  background-color $table-title-bg
  position fixed
  top .45rem
  right .05rem
  bottom @right
  z-index 9999
  padding .15rem .25rem
  $blur()
  color #fff
  .close-btn
    position absolute
    top inherit
    bottom inherit
    margin auto
    width .24rem
    left -@width
    cursor pointer
    transition transform .3s ease
    &:hover
      transform scale(1.2)
</style>
