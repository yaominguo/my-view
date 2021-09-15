import { ref, Ref, onMounted, onUnmounted } from 'vue'

export default function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  cb?: (val: boolean) => any,
) {
  const isClickOutSide = ref(false)
  const handler = (e: MouseEvent) => {
    if (!elementRef || !elementRef.value) return
    isClickOutSide.value = !elementRef.value.contains(e.target as HTMLElement)
    cb && cb(isClickOutSide.value)
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutSide
}
