import { ref, type Ref } from 'vue'

export function useToggle(initialState: boolean): [Ref<boolean>, () => void] {
  const state = ref(initialState)

  function toggle() {
    state.value = !state.value
  }

  return [state, toggle]
}
