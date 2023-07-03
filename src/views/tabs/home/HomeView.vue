<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import SearchView from '../../search/SearchView.vue'
import { useToggle } from '../../../composables/useToggle'

const recommendList = [
  {
    value: 1,
    label: '牛腩'
  },
  {
    value: 2,
    label: '沙拉'
  }
]

const [isSearchView, toggleSearchView] = useToggle(false)
</script>

<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView v-if="isSearchView" @cancel="toggleSearchView" />
    </Transition>
    <TheTop :recommendList="recommendList" @searchClick="toggleSearchView" />
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
