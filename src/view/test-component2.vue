<template>
  <div class="test-component2">
    <div class="summary">
      <div v-for="item in summary" :key="item.name">
        <m-wave :value="item.percent" size=".4rem">
          <m-count :value="item.percent" /> %
        </m-wave>
        <div>
          <m-count class="count" :value="item.value" auto-play />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="rank">
      <m-progress
        v-for="rank in rankList"
        :key="rank.name"
        :value="rank.value"
        :msg="rank"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TestComponent2',
  setup() {
    const summary = ref([
      {
        name: '街面管理',
        value: 75,
        percent: 52,
      },
      {
        name: '综合管理',
        value: 56,
        percent: 36,
      },
      {
        name: '小区管理',
        value: 85,
        percent: 78,
      },
    ])
    const rankList = ref([
      { name: '分类1', value: 50 },
      { name: '分类2', value: 31 },
      { name: '分类3', value: 15 },
      { name: '分类4', value: 65 },
      { name: '分类5', value: 95 },
    ])
    return {
      summary,
      rankList,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../components/MyComponent/main.styl'
.test-component2
  height 100%
  display flex
  flex-direction column
  .summary
    display flex
    justify-content space-between
    align-items center
    margin-top .1rem
    >div
      display flex
      align-items center
      >div
        margin-left .05rem
        .count
          font-size .14rem
          font-weight bold
        p
          color #ccc
  .rank
    flex 1
    display flex
    flex-direction column
    justify-content space-around
</style>
