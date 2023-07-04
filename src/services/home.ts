import type { HomeInfo } from '@/types'
import { request } from './base'

export function fetchHomePageData() {
  return request.get<HomeInfo, HomeInfo>('/home_page')
}
