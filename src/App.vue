<script setup lang="ts">
import { RouterView } from 'vue-router'
import { fetchTest } from '@/services/test'

fetchTest()
</script>

<template>
  <RouterView />
</template>

<style>
@import 'normalize.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
</style>
