import { request } from './base'

export function fetchTest() {
  return request.get('/test')
}
