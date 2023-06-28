import axios from 'axios'
import { showNotify } from 'vant'

export const request = axios.create({
  baseURL: '/api'
})

request.interceptors.response.use((resp) => {
  const { data: _data } = resp
  const { data, msg, code } = _data

  if (code !== 0) {
    showNotify({
      type: 'danger',
      message: msg,
      position: 'bottom'
    })

    return Promise.reject(msg)
  }

  return data
})
