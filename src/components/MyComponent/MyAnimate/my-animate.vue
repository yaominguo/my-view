<template>
  <transition
    name="animate__animated"
    class="animate__animated"
    :enter-active-class="`animate__${enter}`"
    :leave-active-class="`animate__${leave}`"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'MyAnimate',
  displayName: 'm-animate',
  props: {
    enter: {
      type: String as PropType<string>,
      required: true,
    },
    leave: {
      type: String as PropType<string>,
      required: true,
    },
  },
})
</script>
