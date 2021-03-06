<template>
  <div ref="chartRef" class="my-chart" />
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, watchEffect } from 'vue'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
use([PieChart])
import useChartGenerate from './useChartGenerate'
import { PieOption, DatasetComponentOption } from './types'

export default defineComponent({
  name: 'MyPie',
  displayName: 'm-pie',
  props: {
    dataset: {
      type: Object as PropType<DatasetComponentOption>,
      default: null,
    },
    option: {
      type: Object as PropType<PieOption>,
      default: null,
    },
  },
  emits: ['init'],
  setup(props, ctx) {
    const defaultOption: PieOption = {
      backgroundColor: 'transparent',
      tooltip: {
        confine: true,
        trigger: 'item',
      },
      legend: {},
      grid: {
        left: '2%',
        right: '4%',
        bottom: '1%',
        containLabel: true,
      },
    }
    const defaultSeriesItem = {
      type: 'pie',
      radius: ['30%', '50%'],
      center: ['50%', '55%'],
      label: {
        show: false,
        position: 'center',
      },
      // itemStyle: {
      //   borderRadius: 2,
      // },
    }
    const { chartRef, initChart } = useChartGenerate(
      defaultOption,
      defaultSeriesItem
    )
    onMounted(() => {
      const instance = initChart(props.dataset, props.option)
      instance && ctx.emit('init', instance)
    })
    watchEffect(() => {
      const instance = initChart(props.dataset, props.option)
      instance && ctx.emit('init', instance)
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
