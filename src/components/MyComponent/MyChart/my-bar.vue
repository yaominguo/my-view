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
import {
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
} from 'echarts/charts'
import { SVGRenderer } from 'echarts/renderers'
echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  BarChart,
  SVGRenderer,
])

import useChartGenerate from '@/hooks/useChartGenerate.ts'

type ECOption = echarts.ComposeOption<
  | DatasetComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
>

export default defineComponent({
  name: 'MyBar',
  displayName: 'm-bar',
  props: {
    dataset: {
      type: Object as PropType<DatasetComponentOption>,
      default: null,
    },
    option: {
      type: Object as PropType<ECOption>,
      default: null,
    },
    format: {
      type: Function as PropType<
        (dataset: DatasetComponentOption, option: ECOption) => ECOption
      >,
      default: null,
    },
  },
  setup(props) {
    const defaultOption: ECOption = {
      backgroundColor: 'transparent',
      tooltip: {
        confine: true,
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
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
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
    }
    const defaultSeriesItem: BarSeriesOption = {
      type: 'bar',
      barGap: 0,
      emphasis: {
        focus: 'series',
      },
    }
    const { chartRef, initChart } = useChartGenerate(
      defaultOption,
      defaultSeriesItem,
      props.format
    )
    onMounted(() => {
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