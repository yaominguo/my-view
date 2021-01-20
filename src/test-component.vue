<template>
  <div class="test-component">
    <m-scroll :length="30" :limit="10" mode="2" :step="0.8">
      <div v-for="i in 30" :key="i" style="width: 100%; height: 0.8rem">
        <m-count class="count" :value="countValue" />
        <m-step
          :msg="['哈哈哈', '哈哈哈哈哈']"
          :steps="['第一步', '第二步', '第三步', '第四步']"
          current="2"
        />
      </div>
    </m-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  setup() {
    const countValue = ref(9999)
    return {
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
