<template>
  <div class="test-component">
    <m-scroll :limit="1" :length="caseList.length" :step="1.1" mode="2">
      <div
        v-for="(item, i) in caseList"
        :key="i"
        class="detail"
        @click="handleClick(i)"
      >
        <div class="title">
          <p>{{ item.name }}</p>
          <span />
          <p>{{ item.type }}</p>
        </div>
        <div class="msg">
          <p>{{ item.address }}</p>
          <p>{{ item.date }}</p>
        </div>
        <m-step :steps="steps" :current="item.cur" />
      </div>
    </m-scroll>
  </div>
  <m-modal v-model="showDetail" title="详情">
    <m-form
      :template="[
        'name:小区名称|type:事件类型',
        'cur:当前状态>transState|date:时间',
        'address:地址',
      ]"
      label-width="0.7rem"
      :data="curDetail"
      :formatter="formatter"
    />
  </m-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import store from '@/store'

interface CaseProp {
  name: string
  type: string
  address: string
  date: string
  cur: number
}

export default defineComponent({
  name: 'TestComponent',
  emits: ['select'],
  setup(props, context) {
    const steps = ref(['发现', '立案', '派遣', '处置', '核查', '结案'])
    const caseList = ref<CaseProp[]>([
      {
        name: '均乐小区',
        type: '电梯困人',
        address: '上海市黄浦区延安东路1292弄6~40号',
        date: '2020-02-13 13:23:08',
        cur: 5,
      },
      {
        name: '均乐小区',
        type: '电梯困人',
        address: '上海市黄浦区延安东路1292弄6~40号',
        date: '2020-02-13 13:23:08',
        cur: 4,
      },
      {
        name: '均乐小区',
        type: '电梯困人',
        address: '上海市黄浦区延安东路1292弄6~40号',
        date: '2020-02-13 13:23:08',
        cur: 3,
      },
      {
        name: '均乐小区',
        type: '电梯困人',
        address: '上海市黄浦区延安东路1292弄6~40号',
        date: '2020-02-13 13:23:08',
        cur: 2,
      },
    ])
    const curDetail = ref<CaseProp | null>(null)
    const showDetail = ref(false)
    const handleClick = (i: number) => {
      context.emit('select', i)
      curDetail.value = caseList.value[i]
      store.commit('SET_LOADING', true)
      store.commit('SET_LOADING', false)
      showDetail.value = true
      // setTimeout(() => {
      // }, 2000)
    }
    return {
      steps,
      caseList,
      showDetail,
      handleClick,
      curDetail,
      formatter: {
        transState: (val: number) => steps.value[val],
      },
    }
  },
})
</script>

<style scoped lang="stylus">
@import '../components/MyComponent/main.styl'
.test-component
  $full()
  overflow hidden
.detail
  display flex
  flex-direction column
  justify-content space-between
  padding .1rem
  height 1rem
  background rgba(0,0,0,0.2)
  margin-bottom .1rem
  box-sizing border-box
  cursor pointer
  &:hover
    border .01rem solid $blue
  .title
    display flex
    align-items center
    p
      font-size .12rem
      &:last-child
        color $edge
        font-size .1rem
    span
      display block
      height .01rem
      background $blue
      flex 1
      margin 0 .1rem
  .msg
    $center()
    justify-content space-between
    color $blue
    font-size .08rem
</style>
