<template>
  <div ref="chartRef" class="my-chart" />
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, watchEffect } from 'vue'
import * as echarts from 'echarts/core'
import {
  DatasetComponent,
  DatasetComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components'
import { LineChart, LineSeriesOption } from 'echarts/charts'
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
import useChartGenerate from '@/hooks/useChartGenerate'

type ECOption = echarts.ComposeOption<
  | DatasetComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>

export default defineComponent({
  name: 'MyLine',
  displayName: 'm-line',
  props: {
    dataset: {
      type: Object as PropType<DatasetComponentOption>,
      default: null,
    },
    option: {
      type: Object as PropType<ECOption>,
      default: null,
    },
  },
  setup(props) {
    const defaultOption: ECOption = {
      backgroundColor: 'transparent',
      tooltip: {
        confine: true,
        trigger: 'axis',
      },
      legend: {},
      grid: {
        left: '2%',
        right: '4%',
        bottom: '1%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [],
      dataset: props.dataset,
    }
    const defaultSeriesItem: LineSeriesOption = {
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 2,
      },
      emphasis: {
        focus: 'series',
      },
    }
    const { chartRef, initChart } = useChartGenerate(
      defaultOption,
      defaultSeriesItem
    )
    onMounted(async () => {
      initChart(props.dataset, props.option)
    })
    watchEffect(() => {
      initChart(props.dataset, props.option)
    })
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
