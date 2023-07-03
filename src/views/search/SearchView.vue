<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from 'vant'
import type { SearchResultItem } from '@/types'
import { useToggle } from '@/composables/useToggle'
import { useDebounce } from '@/composables/useDebounce'
import SearchInput from '../../components/SearchInput.vue'
import { fetchSearchData } from '../../services/search'
import { computed } from 'vue'
import { watch } from 'vue'

interface Emits {
  (e: 'cancel'): void
}
const emits = defineEmits<Emits>()

const searchValue = ref('')
const searchResult = ref<SearchResultItem[]>([])

type SearchStatus = 'INIT' | 'FETCHING' | 'DONE'

const searchStatus = ref<SearchStatus>('INIT')

const onSearch = async (v?: string) => {
  try {
    searchStatus.value = 'FETCHING'
    const { list } = await fetchSearchData(v)
    searchResult.value = list
  } finally {
    searchStatus.value = 'DONE'
  }
}

const HISTORY_TAGS = [
  '比萨',
  '栗子',
  '切果NOW',
  '炒饭',
  '出前一丁',
  '玉米',
  '牛腩',
  '土豆焗饭',
  '烧烤',
  '水果'
]
const [showHistoryTags, toggleHistoryTags] = useToggle(false)
const historyTags = computed(() =>
  showHistoryTags.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0, 5)
)

const onTagClick = (v: string) => {
  searchValue.value = v
  onSearch(v)
}

// watch(
//   searchValue,
//   useDebounce((newValue) => {
//     if (!newValue) {
//       searchResult.value = []
//       return
//     }
//     onSearch(newValue as string)
//   }, 600)
// )
const debounceValue = useDebounce(searchValue, 1000)
watch(debounceValue, (newValue) => {
  if (!newValue) {
    searchResult.value = []
    return
  }
  onSearch(newValue as string)
})
</script>

<template>
  <div class="search-view">
    <SearchInput
      show-action
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键字"
      @search="onSearch"
      @cancel="emits('cancel')"
    />

    <div class="search-view__history" v-if="!searchValue">
      <div class="label">历史搜索</div>
      <TransitionGroup name="list">
        <div class="history-tag" v-for="v in historyTags" :key="v" @click="onTagClick(v)">
          {{ v }}
        </div>
        <div class="history-tag" @click="toggleHistoryTags">
          <Icon name="arrow-up" v-if="showHistoryTags" />
          <Icon name="arrow-down" v-else />
        </div>
      </TransitionGroup>
    </div>

    <div class="search-view__result" v-else>
      <div class="searching" v-if="searchStatus === 'FETCHING'">正在搜索</div>

      <template v-if="searchStatus === 'DONE'">
        <div class="result-item" v-for="v in searchResult" :key="v.label">
          <Icon name="search" />
          <div class="name">{{ v.label }}</div>
          <div class="count">约 {{ v.resultCount }} 个结果</div>
        </div>

        <div class="no-result" v-if="searchResult.length === 0">暂无推荐</div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  z-index: 9999;

  &__history {
    padding: var(--van-padding-sm);
    .label {
      margin-bottom: var(--van-padding-xs);
    }
    .history-tag {
      display: inline-block;
      font-size: 12px;
      border-radius: 10px;
      color: var(--van-gray-6);
      background-color: var(--van-gray-1);
      padding: 4px 8px;
      margin-right: 10px;
      margin-bottom: var(--van-padding-xs);
    }
  }

  &__result {
    .result-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 10px;
      border-radius: 1px solid var(--van-gray-1);

      .name {
        flex: 1;
        padding-left: 6px;
      }

      .count {
        font-size: 12px;
        color: var(--van-gray-6);
      }
    }

    .no-result,
    .searching {
      font-size: 12px;
      padding: 100px 0;
      text-align: center;
      color: var(--van-gray-6);
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
