<script setup lang="ts">
import TheTop from './components/TheTop.vue'

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
</script>

<template>
  <div class="home-page">
    <TheTop :recommendList="recommendList" />
  </div>
</template>

<style scoped>
.test {
  font-size: 39px;
}
</style>
