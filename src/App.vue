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
      <m-line :data="chartData" />
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
    const chartData = ref({
      dimensions: ['日期', 'Line1', 'Line2', 'Line3'],
      source: [
        { name: '周一', line1: 100, line2: 200, line3: 300 },
        { name: '周二', line1: 110, line2: 210, line3: 320 },
        { name: '周三', line1: 120, line2: 230, line3: 340 },
        { name: '周四', line1: 130, line2: 240, line3: 360 },
        { name: '周五', line1: 140, line2: 250, line3: 380 },
        { name: '周六', line1: 150, line2: 260, line3: 390 },
      ],
    })
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
