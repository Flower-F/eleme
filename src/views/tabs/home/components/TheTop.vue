<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import { type RecommendItem } from '@/types'
interface Props {
  recommendList: RecommendItem[]
}
defineProps<Props>()

interface Emits {
  (e: 'searchClick'): void
}
const emits = defineEmits<Emits>()
</script>

<template>
  <div class="home-top">
    <div class="top">
      <img src="@/assets/imgs/index_page/location.png" class="location-icon" />
      <div class="location">幸福小区(北一区东南门)</div>
      <img src="@/assets/imgs/index_page/shopcart.png" alt="购物车" class="shopcart-icon" />
      <img src="@/assets/imgs/index_page/comments.png" alt="评论" class="comments-icon" />
    </div>

    <SearchInput
      shape="round"
      background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
      placeholder="世界茶饮 35减2"
      @inputClick="emits('searchClick')"
    >
      <template #right-icon>
        <button class="search-button" @click="emits('searchClick')">搜索</button>
      </template>
    </SearchInput>

    <div class="search-recommend">
      <div class="tag" v-for="recommend in recommendList" :key="recommend.value">
        {{ recommend.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top {
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
  color: #fff;

  .top {
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
    line-height: 15px;
    font-size: 15px;
    font-weight: bold;

    .location-icon {
      width: 20px;
      height: 20px;
    }

    .location {
      flex: 1;
    }

    .shopcart-icon {
      width: 24px;
      height: 24px;
    }

    .comments-icon {
      width: 28px;
      height: 24px;
      margin-left: 10px;
    }
  }

  .search-button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  .search-recommend {
    display: flex;
    padding: 0 10px 8px;

    .tag {
      font-size: 12px;
      border-radius: 10px;
      background-color: rgb(242, 242, 242, 0.3);
      padding: 2px 8px;
      margin-right: 10px;
    }
  }
}
</style>
<style lang="scss">
.home-top {
  .van-field__right-icon {
    margin-right: 0;
  }
}
</style>
