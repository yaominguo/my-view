import { onMounted, onBeforeUnmount, nextTick, shallowRef, Ref } from 'vue'
import * as echarts from 'echarts/core'
import {
  DatasetComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
} from 'echarts/components'

import {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
} from 'echarts/charts'

type ECOption = echarts.ComposeOption<
  | DatasetComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
>

interface ReturnProp {
  chartRef: Ref<null | HTMLElement>
  initChart: (dataset: DatasetComponentOption, option: ECOption) => void
}

export default function useChartGenerate<T extends ECOption, U>(
  defaultOption: T,
  defaultSeriesItem?: U,
  fn?: (dataset: DatasetComponentOption, option: ECOption) => ECOption
): ReturnProp {
  const chartRef = shallowRef<null | HTMLElement>(null)
  const myChart = shallowRef<null | echarts.ECharts>(null)

  const mergeOptions = (
    dataset: DatasetComponentOption,
    option: ECOption
  ): ECOption => {
    let length = 0
    if (dataset) {
      defaultOption.dataset = dataset
      if (dataset.dimensions) {
        length = dataset.dimensions.length - 1
      } else if (dataset.source) {
        length =
          Object.keys(
            (Array.isArray(dataset.source) && dataset.source[0]) || []
          ).length - 1
      }
    }
    defaultOption.series = []
    for (let index = 0; index < length; index++) {
      defaultSeriesItem && defaultOption.series.push(defaultSeriesItem)
    }
    return Object.assign({}, defaultOption, option || {})
  }

  const initChart = (dataset: DatasetComponentOption, option: ECOption) => {
    if (!myChart.value) return
    const options = fn ? fn(dataset, option) : mergeOptions(dataset, option)
    if (
      !options.series ||
      (Array.isArray(options.series) && options.series.length === 0)
    ) {
      return
    }
    myChart.value.setOption(options, true)
  }

  const handleResize = () => {
    if (!myChart.value) return
    myChart.value.resize()
  }

  onMounted(async () => {
    window.addEventListener('resize', handleResize)
    await nextTick()
    myChart.value = echarts.init(chartRef.value as HTMLElement, 'dark')
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    if (!myChart.value) return
    myChart.value.dispose()
    myChart.value = null
  })

  return { chartRef, initChart }
}
