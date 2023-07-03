import type { SearchResultList } from '@/types'
import { request } from './base'

export function fetchSearchData(keyword = '') {
  return request.get<SearchResultList, SearchResultList>('/home_search', {
    params: { _label_like: keyword }
  })
}
