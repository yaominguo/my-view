<template>
  <div class="test-component">
    <m-modal v-model="showModal" title="测试弹窗">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde similique
        commodi enim impedit? Eveniet magnam enim numquam aperiam illo amet modi
        maxime! Autem nam ab quos molestiae itaque corrupti enim?
      </p>
    </m-modal>
    <m-scroll :length="30" :limit="10" mode="2" :step="0.8">
      <div v-for="i in 30" :key="i" style="width: 100%; height: 0.8rem">
        <m-count class="count" :value="countValue" />
        <p @click="showModal = true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure
          dignissimos soluta itaque a pariatur harum cumque? Quisquam, neque
          consectetur totam distinctio quaerat adipisci facilis maiores
          excepturi repudiandae commodi ipsa.
        </p>
      </div>
    </m-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  setup() {
    const showModal = ref(false)
    const countValue = ref(9999)
    return {
      showModal,
      countValue,
    }
  },
})
</script>

<style scoped lang="stylus">
@import './components/MyComponent/main.styl'
.test-component
  $full()
</style>
