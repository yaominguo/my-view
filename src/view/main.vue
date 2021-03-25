<template>
  <m-grid
    :template="[
      'title title title',
      'box1 . box3',
      'box1 . box3',
      'box2 . box3',
      'box2 box4 box4',
    ]"
    columns="1fr 1.5fr 1fr"
    rows="0.4rem 1fr 0.5fr 0.5fr 1fr"
  >
    <m-title area="title">XXX数据平台</m-title>
    <m-card area="box1" title="Box1">
      <TestComponent2 />
    </m-card>
    <m-card area="box2" title="Box2">
      <m-empty v-if="!show"></m-empty>
      <m-bar :dataset="chartData" :option="chartOption" />
    </m-card>
    <m-card
      v-show="show"
      area="box3"
      title="Box3"
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
    <m-card area="box4" :title="`Box${boxNumber}`">
      <TestComponent @select="(val) => (boxNumber += val * 2)" />
    </m-card>
  </m-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TestComponent from './test-component.vue'
import TestComponent2 from './test-component2.vue'
import { ChartTypes } from '@/components/MyComponent'

interface TableDataProps {
  [propName: string]: string
}

export default defineComponent({
  name: 'Main',
  components: { TestComponent, TestComponent2 },
  setup() {
    const show = ref(false)
    const chartData = ref<ChartTypes.DatasetComponentOption | null>(null)
    const chartOption = ref<ChartTypes.BarOption>({
      color: [['#5BD5FF', '#826AFA'], ['#FFCE34', 'red'], '#7BFFB3'],
      series: [
        {
          type: 'bar',
          barWidth: '30%',
          itemStyle: { borderRadius: 8 },
          barGap: 0,
          stack: '总量',
        },
        {
          type: 'bar',
          barWidth: '30%',
          itemStyle: { borderRadius: 8 },
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
    })
    const boxNumber = ref(4)
    const tableData = ref<TableDataProps[]>([])
    setTimeout(() => {
      show.value = true
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
          { name: 'date', displayName: '日期' },
          { name: 'data1', displayName: '发现数' },
          { name: 'data2', displayName: '处置数' },
          { name: 'data3', displayName: '结案数' },
        ],
        source: [
          { date: '11日', data1: 100, data2: 100, data3: 100 },
          { date: '12日', data1: 110, data2: 110, data3: 120 },
          { date: '13日', data1: 120, data2: 130, data3: 140 },
          { date: '14日', data1: 130, data2: 140, data3: 160 },
          { date: '15日', data1: 140, data2: 150, data3: 180 },
          { date: '16日', data1: 150, data2: 160, data3: 190 },
          { date: '17日', data1: 150, data2: 160, data3: 190 },
          { date: '18日', data1: 150, data2: 160, data3: 190 },
        ],
      }
    }, 3000)

    const customFormatter = (val: string) => {
      return val + '哈哈哈'
    }
    return {
      show,
      tableData,
      customFormatter,
      chartData,
      chartOption,
      boxNumber,
    }
  },
})
</script>

<style lang="stylus"></style>
