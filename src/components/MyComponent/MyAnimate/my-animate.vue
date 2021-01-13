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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyAnimate',
  displayName: 'm-animate',
  props: {
    enter: {
      type: String,
      required: true,
    },
    leave: {
      type: String,
      required: true,
    },
  },
})
</script>
