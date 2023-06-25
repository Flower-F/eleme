<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant'
import { watch, ref } from 'vue'
import { useRoute, useRouter, RouterView } from 'vue-router'

const route = useRoute()
const router = useRouter()
const active = ref(typeof route.name === 'string' ? route.name : 'home')

watch(active, (newActive) => {
  router.push({
    name: newActive
  })
})
</script>

<template>
  <RouterView />
  <!-- <div class="center">{{ active }}</div> -->
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<style>
.center {
  text-align: center;
}
</style>
