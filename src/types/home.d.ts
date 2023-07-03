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
