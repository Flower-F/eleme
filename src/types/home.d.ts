export interface RecommendItem {
  value: number
  label: string
}

export interface SearchResultItem {
  type: number
  label: string
  resultCount: number
}

export interface SearchResultList {
  list: SearchResultItem[]
}

export interface HomeInfo {
  banners: Banner[]
  searchRecommends: SearchRecommend[]
  transformers: TransFormer[]
  countdown: CountDown
  activities: string[]
}

interface Banner {
  imgUrl: string
}

interface TransFormer {
  imgUrl: string
  label: string
}

interface CountDown {
  time: number
  goods: Good[]
}

interface Good {}
