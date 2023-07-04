import { ref, type UnwrapRef } from 'vue'

export function useAsync<T>(asyncFn: () => Promise<T>, initialValue: T, immediate = true) {
  const loading = ref(false)
  const data = ref(initialValue)
  const error = ref(null)

  const exec = () => {
    loading.value = true
    error.value = null

    return asyncFn()
      .then((res) => {
        data.value = res as UnwrapRef<T>
      })
      .catch((e) => {
        error.value = e
      })
      .finally(() => {
        loading.value = false
      })
  }

  if (immediate) {
    exec()
  }

  return {
    loading,
    data,
    error,
    exec
  }
}
