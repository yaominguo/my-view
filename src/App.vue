<template>
  <m-grid
    class="grid-aaa"
    :template="['title title title', 'box1 . box3', 'box2 . box3']"
    columns="1fr 2fr 1fr"
    rows="0.4rem 1fr 1fr"
  >
    <m-map />
    <m-title area="title">XXXXXXX数据平台</m-title>
    <m-loader v-if="show" />
    <m-card area="box1" title="哈哈哈哈">
      <TestComponent />
    </m-card>
    <m-card area="box2" title="哈哈哈">
      <m-radar :dataset="chartData" />
      <!-- <m-pie :dataset="chartData" /> -->
      <!-- <m-bar :dataset="chartData" :option="chartOption" /> -->
    </m-card>
    <m-card
      v-show="test"
      area="box3"
      title="测试测试"
      enter="fadeInRight"
      leave="fadeOutRight"
    >
      <m-table
        :template="[
          '标题1|标题2*2|标题3*2',
          'key1|key2>customFormatter|key3#image',
        ]"
        :data="tableData"
        :formatter="{ customFormatter }"
      />
    </m-card>
  </m-grid>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import TestComponent from './test-component.vue'
import store from '@/store'

interface TableDataProps {
  [propName: string]: string
}

export default defineComponent({
  name: 'App',
  components: { TestComponent },
  setup() {
    const show = computed(() => store.state.showLoading)
    const test = ref(false)
    const chartData = ref<any>(null)
    const chartOption = ref<any>(null)
    setTimeout(() => {
      test.value = true
      tableData.value = [
        {
          key1: 'key1',
          key2: 'key2',
          key3: 'https://avatars2.githubusercontent.com/u/43328103?v=4',
        },
        {
          key1: 'key1',
          key2: 'key2',
          key3: 'https://avatars2.githubusercontent.com/u/43328103?v=4',
        },
        {
          key1: 'key1',
          key2: 'key2',
          key3: 'https://avatars2.githubusercontent.com/u/43328103?v=4',
        },
        {
          key1: 'key1',
          key2: 'key2',
          key3: 'https://avatars2.githubusercontent.com/u/43328103?v=4',
        },
      ]
      chartData.value = {
        dimensions: [
          { name: 'data0', displayName: '数据0', max: 500 },
          { name: 'data1', displayName: '数据1', max: 500 },
          { name: 'data2', displayName: '数据2', max: 500 },
          { name: 'data3', displayName: '数据3', max: 500 },
        ],
        source: [
          {
            seriesName: '周一',
            data0: 150,
            data1: 200,
            data2: 200,
            data3: 300,
          },
          {
            seriesName: '周二',
            data0: 150,
            data1: 110,
            data2: 210,
            data3: 320,
          },
          {
            seriesName: '周三',
            data0: 150,
            data1: 110,
            data2: 210,
            data3: 500,
          },
          // { name: '周三', data1: 120, data2: 230, data3: 340 },
          // { name: '周四', data1: 130, data2: 240, data3: 360 },
          // { name: '周五', data1: 140, data2: 250, data3: 380 },
          // { name: '周六', data1: 150, data2: 260, data3: 390 },
          // { name: '周日', data1: 150, data2: 260, data3: 390 },
        ],
        // dimensions: [
        //   { name: 'name', displayName: '坐标名' },
        //   { name: 'data1', displayName: '数据1' },
        //   { name: 'data2', displayName: '数据2' },
        //   { name: 'data3', displayName: '数据3' },
        // ],
        // source: [
        //   { name: '周一', data1: 100, data2: 200, data3: 300 },
        //   { name: '周二', data1: 110, data2: 210, data3: 320 },
        //   { name: '周三', data1: 120, data2: 230, data3: 340 },
        //   { name: '周四', data1: 130, data2: 240, data3: 360 },
        //   { name: '周五', data1: 140, data2: 250, data3: 380 },
        //   { name: '周六', data1: 150, data2: 260, data3: 390 },
        //   { name: '周日', data1: 150, data2: 260, data3: 390 },
        // ],
      }
      chartOption.value = {
        color: [['skyblue', 'blue'], 'green', 'gold'],
        series: [
          {
            type: 'bar',
            barGap: 0,
            stack: '总量',
            emphasis: {
              focus: 'series',
            },
          },
          {
            type: 'bar',
            barGap: 0,
            stack: '总量',
            emphasis: {
              focus: 'series',
            },
          },
          {
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 2,
            },
            emphasis: {
              focus: 'series',
            },
          },
        ],
      }
    }, 3000)

    const customFormatter = (val: string) => {
      return val + '哈哈哈'
    }
    const tableData = ref<TableDataProps[]>([])
    return {
      test,
      tableData,
      customFormatter,
      show,
      chartData,
      chartOption,
    }
  },
})
</script>

<style lang="stylus">
html, body
  background rgba(0,0,0,0.5)
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100%
  user-select none
  font-size 16vh
  line-height 1.5
  color #fff
#app
  width 100%
  height 100%
  overflow hidden
  font-size .1rem
  background url('/src/assets/images/background.jpg') center/cover no-repeat

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: .05rem;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background:rgba(91, 213, 255, 0.5)
  -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:rgba(91, 213, 255, 0.5)
}
</style>
