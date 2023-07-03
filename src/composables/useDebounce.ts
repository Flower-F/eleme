// interface DebounceFn<T> {
//   (...args: T[]): void | Promise<void>
// }

import { ref, watch, type Ref, type UnwrapRef, onUnmounted } from 'vue'

// export function useDebounce<T>(func: DebounceFn<T>, delay: number) {
// let timer: number | null = null

//   return function (this: void, ...args: T[]) {
// if (timer) {
//   clearTimeout(timer)
// }
// timer = setTimeout(() => {
//   func.call(this, ...args)
// }, delay)
//   }
// }

export function useDebounce<T>(value: Ref<T>, delay: number) {
  const debounceValue = ref(value.value)
  let timer: number | null = null

  const unwatch = watch(value, (newValue) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      debounceValue.value = newValue as UnwrapRef<T>
    }, delay)
  })

  onUnmounted(() => {
    unwatch()
  })

  return debounceValue
}
