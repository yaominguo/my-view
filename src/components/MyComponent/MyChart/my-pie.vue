<template>
  <div ref="chartRef" class="my-chart" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, nextTick, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { SVGRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  SVGRenderer,
])

export default defineComponent({
  name: 'MyPie',
  displayName: 'm-pie',
  setup() {
    const chartRef = ref<null | HTMLElement>(null)
    const myChart = ref<null | echarts.ECharts>(null)
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
