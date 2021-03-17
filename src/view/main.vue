<template>
  <m-grid
    :template="['title title title', 'box1 . box3', 'box2 . box3']"
    columns="1fr 2fr 1fr"
    rows="0.4rem 1fr 1fr"
  >
    <m-title area="title">XXXXXXX数据平台</m-title>
    <m-card area="box1" title="哈哈哈哈">
      <TestComponent />
    </m-card>
    <m-card area="box2" title="哈哈哈">
      <!-- <m-empty /> -->
      <!-- <m-radar :dataset="chartData" /> -->
      <!-- <m-scatter :dataset="chartData" /> -->
      <!-- <m-pie :dataset="chartData" /> -->
      <m-bar :dataset="chartData" :option="chartOption" />
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
import { defineComponent, ref } from 'vue'
import TestComponent from './test-component.vue'
import { ChartTypes } from '@/components/MyComponent'

interface TableDataProps {
  [propName: string]: string
}

export default defineComponent({
  name: 'Main',
  components: { TestComponent },
  setup() {
    const test = ref(false)
    const chartData = ref<ChartTypes.DatasetComponentOption | null>(null)
    const chartOption = ref<ChartTypes.BarOption | null>(null)
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
        // dimensions: [
        //   { name: 'data0', displayName: '数据0', max: 500 },
        //   { name: 'data1', displayName: '数据1', max: 500 },
        //   { name: 'data2', displayName: '数据2', max: 500 },
        //   { name: 'data3', displayName: '数据3', max: 500 },
        // ],
        // source: [
        //   {
        //     seriesName: '周一',
        //     data0: 150,
        //     data1: 200,
        //     data2: 200,
        //     data3: 300,
        //   },
        //   {
        //     seriesName: '周二',
        //     data0: 150,
        //     data1: 110,
        //     data2: 210,
        //     data3: 320,
        //   },
        //   {
        //     seriesName: '周三',
        //     data0: 150,
        //     data1: 110,
        //     data2: 210,
        //     data3: 500,
        //   },
        // ],
        dimensions: [
          { name: 'name', displayName: '坐标名' },
          { name: 'data1', displayName: '数据1' },
          { name: 'data2', displayName: '数据2' },
          { name: 'data3', displayName: '数据3' },
        ],
        source: [
          { name: '周一', data1: 100, data2: 200, data3: 300 },
          { name: '周二', data1: 110, data2: 210, data3: 320 },
          { name: '周三', data1: 120, data2: 230, data3: 340 },
          { name: '周四', data1: 130, data2: 240, data3: 360 },
          { name: '周五', data1: 140, data2: 250, data3: 380 },
          { name: '周六', data1: 150, data2: 260, data3: 390 },
          { name: '周日', data1: 150, data2: 260, data3: 390 },
        ],

        // dimensions: [
        //   { name: 'data1', displayName: '数据1' },
        //   { name: 'data2', displayName: '' },
        //   { name: 'data3', displayName: '数据2' },
        //   { name: 'data4', displayName: '' },
        // ],
        // source: [
        //   [10.0, 8.04],
        //   [8.07, 6.95],
        //   [13.0, 7.58],
        //   [9.05, 8.81],
        //   [11.0, 8.33],
        //   [14.0, 7.66],
        //   [13.4, 6.81],
        //   [10.0, 6.33],
        //   [14.0, 8.96],
        //   [12.5, 6.82],
        //   [9.15, 7.2],
        //   [11.5, 7.2],
        //   [3.03, 4.23],
        //   [12.2, 7.83],
        //   [2.02, 4.47],
        //   [1.05, 3.33],
        //   [4.05, 4.96],
        //   [6.03, 7.24],
        //   [12.0, 6.26],
        //   [12.0, 8.84],
        //   [7.08, 5.82],
        //   [5.02, 5.68],
        // { data1: 100, data2: 200, data3: 300, data4: 100 },
        // { data1: 200, data2: 100, data3: 300, data4: 300 },
        // { data1: 300, data2: 300, data3: 100, data4: 200 },
        // ],
      }
      chartOption.value = {
        color: [['skyblue', 'blue'], 'green', 'gold'],
        series: [
          {
            type: 'bar',
            barGap: 0,
            stack: '总量',
          },
          {
            type: 'bar',
            barGap: 0,
            stack: '总量',
          },
          {
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 2,
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
      chartData,
      chartOption,
    }
  },
})
</script>

<style lang="stylus"></style>
