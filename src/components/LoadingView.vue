<script setup lang="ts">
import { Loading, Skeleton } from 'vant'

interface Props {
  loading: boolean
  type: 'loading' | 'skeleton'
}

defineProps<Props>()
</script>

<template>
  <div v-if="loading" class="loading-view">
    <slot name="template">
      <div v-if="type === 'loading'" class="loading-wrapper">
        <Loading />
      </div>
      <div v-if="type === 'skeleton'" class="skeleton-wrapper">
        <Skeleton :row="4" />
        <Skeleton title avatar :row="5" />
        <Skeleton title :row="5" />
      </div>
    </slot>
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.loading-view {
  .loading-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .skeleton-wrapper {
    padding: 20px 10px;
  }
}
</style>
