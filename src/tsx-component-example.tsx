import { computed, defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  name: 'TsxComponent',
  props: {
    msg: {
      type: String as PropType<string>,
      default: 'Tsx',
    },
  },
  setup(props) {
    const count = ref(1)
    const list = computed(() => {
      const result = []
      for (let i = 0; i < count.value; i++) {
        result.push(i + 1)
      }
      return result
    })
    return () => (
      <>
        <h1>Hello, {props.msg}</h1>
        <button onClick={() => (count.value += 1)}>
          Add count: <b>{count.value}</b>
        </button>
        <ul>
          {list.value.map((_, i) => (
            <li>{i + 1}</li>
          ))}
        </ul>
      </>
    )
  },
})
