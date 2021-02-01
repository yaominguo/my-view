<template>
  <div ref="chartRef" class="my-chart" />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  shallowRef,
  nextTick,
  onBeforeUnmount,
  watch,
} from 'vue'
import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { SVGRenderer } from 'echarts/renderers'
echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  SVGRenderer,
])

export default defineComponent({
  name: 'MyLine',
  displayName: 'm-line',
  props: {
    data: {
      type: Object,
      required: true,
    },
    option: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    const chartRef = shallowRef<null | HTMLElement>(null)
    const myChart = shallowRef<null | echarts.ECharts>(null)
    const handleResize = () => {
      if (!myChart.value) return
      myChart.value.resize()
    }
    const mergeOptions = () => {
      console.log('data0000', props.data)

      const defaultOption = {
        backgroundColor: 'transparent',
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        // title: {
        //   text: '图表名称',
        // },
        tooltip: {
          confine: true,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: 'rgba(0,0,0,.6)',
            },
          },
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(128, 255, 165)',
                },
                {
                  offset: 1,
                  color: 'rgba(1, 191, 236)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
          },
          {
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(0, 221, 255)',
                },
                {
                  offset: 1,
                  color: 'rgba(77, 119, 255)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
          },
          {
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(55, 162, 255)',
                },
                {
                  offset: 1,
                  color: 'rgba(116, 21, 219)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
          },
        ],
        dataset: {
          dimensions: [
            'date',
            { name: 'Line1', displayName: '还好' },
            'Line2',
            'Line3',
          ],
          source: [
            { date: '周一', Line1: 100, Line2: 200, Line3: 300 },
            { date: '周二', Line1: 110, Line2: 210, Line3: 320 },
            { date: '周三', Line1: 120, Line2: 230, Line3: 340 },
            { date: '周四', Line1: 130, Line2: 240, Line3: 360 },
            { date: '周五', Line1: 140, Line2: 250, Line3: 380 },
            { date: '周六', Line1: 150, Line2: 260, Line3: 390 },
          ],
        },
      }
      return Object.assign({}, defaultOption, props.option || {})
    }
    const initChart = () => {
      if (!myChart.value) return
      const options = mergeOptions()
      myChart.value.setOption(options, true)
    }
    onMounted(async () => {
      window.addEventListener('resize', handleResize)
      await nextTick()
      myChart.value = echarts.init(chartRef.value as HTMLElement, 'dark')
      initChart()
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
      if (!myChart.value) return
      myChart.value.dispose()
      myChart.value = null
    })
    watch(
      () => props.data,
      () => initChart(),
      { deep: true }
    )
    return {
      chartRef,
    }
  },
})
</script>

<style lang="stylus" scoped>
@import '../main.styl'
.my-chart
  $full()
</style>
