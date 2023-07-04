<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import SearchView from '../../search/SearchView.vue'
import LoadingView from '@/components/LoadingView.vue'
import { useToggle } from '@/composables/useToggle'
import { useAsync } from '@/composables/useAsync'
import { fetchHomePageData } from '@/services/home'
import type { HomeInfo } from '@/types'

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

const { data, loading } = useAsync(fetchHomePageData, {} as HomeInfo)
</script>

<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView v-if="isSearchView" @cancel="toggleSearchView" />
    </Transition>
    <TheTop :recommendList="recommendList" @searchClick="toggleSearchView" />
    <LoadingView :loading="loading" type="skeleton">
      <div>{{ data }}</div>
    </LoadingView>
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
