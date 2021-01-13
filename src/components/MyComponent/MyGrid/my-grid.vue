<template>
  <div class="my-grid" :style="style" ref="gridRef">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'

export default defineComponent({
  name: 'MyGrid',
  displayName: 'm-grid',
  props: {
    template: {
      type: Array as PropType<String[]>,
      required: true,
    },
    columns: {
      type: String,
      required: true,
    },
    rows: {
      type: String,
      required: true,
    },
    gap: {
      type: String,
      default: '.05rem',
    },
  },
  setup(props) {
    const gridRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      const { children } = gridRef.value as HTMLElement
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement
        const area = child.getAttribute('area')
        if (area) {
          child.style.gridArea = area
        }
      }
    })
    const style = computed(() => {
      const { template, columns, rows, gap } = props
      if (!template || template.length === 0) return
      let areas = ''
      template.forEach((area) => {
        areas += `'${area}'`
      })
      return {
        'grid-template-areas': areas,
        'grid-template-columns': columns,
        'grid-template-rows': rows,
        'grid-gap': gap,
        padding: gap,
      }
    })
    return {
      gridRef,
      style,
    }
  },
})
</script>

<style scoped lang="stylus">
@import '../main.styl'
.my-grid
  $full()
  background-size cover
  background-position center
  position relative
  display grid
  overflow hidden
</style>
