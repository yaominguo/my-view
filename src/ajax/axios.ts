import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'
import qs from 'qs'
import api from './api'
import store from '@/store'

const Axios = axios.create({
  baseURL: api.BASE_URL,
  timeout: 15000,
})
Axios.interceptors.request.use(
  (config) => {
    // 添加token
    // config.headers.Authorization = 'token'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (response) => {
    if (response.config.headers.__show_loading) {
      store.commit('SET_LOADING', false)
    }
    // TODO 返回的数据status判断错误操作等……
    return response.data
  },
  (error) => {
    store.commit('SET_LOADING', false)
    return Promise.reject(error)
  }
)

interface ParamsProp {
  [propName: string]: unknown
}

interface RequestOptions {
  method?:
    | 'GET'
    | 'get'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH'
    | 'purge'
    | 'PURGE'
    | 'link'
    | 'LINK'
    | 'unlink'
    | 'UNLINK'
    | undefined
  url: string
  params?: ParamsProp
  contentType?:
    | 'application/json;charset=UTF-8'
    | 'application/x-www-form-urlencoded;charset=UTF-8'
  showLoading?: boolean
  headers?: { [key: string]: string }
}

/**
 * 请求
 * @param {String} method [请求方法]
 * @param {String} url [请求地址]
 * @param {Object} params [请求参数]
 * @param {String} contentType [请求头，默认为'application/json;charset=UTF-8']
 * @param {Boolean} showLoading [是否显示请求时的loading图，默认为true]
 * @param {Object} headers [自定义请求头]
 */
const ajax = ({
  method = 'GET',
  url,
  params = {},
  contentType = 'application/json;charset=UTF-8',
  showLoading = true,
  headers = {},
}: RequestOptions) => {
  if (!url || typeof url != 'string') {
    throw new Error('接口URL不正确')
  }
  let config: AxiosRequestConfig = {
    method,
    url,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Authorization,Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': '*',
      __show_loading: showLoading,
      ...headers,
    },
  }
  if (method === 'GET') {
    config = Object.assign(config, { params })
  } else {
    if (contentType.toLowerCase().indexOf('x-www-form-urlencoded') >= 0) {
      config = Object.assign(config, { data: qs.stringify(params) })
    } else {
      config = Object.assign(config, { data: params })
    }
  }
  if (showLoading) {
    store.commit('SET_LOADING', true)
  }
  return Axios(config)
}

export default {
  get(args: RequestOptions): AxiosPromise<any> {
    return ajax({ method: 'GET', ...args })
  },
  post(args: RequestOptions): AxiosPromise<any> {
    // args.contentType = 'application/x-www-form-urlencoded;charset=UTF-8'
    return ajax({ method: 'POST', ...args })
  },
  put(args: RequestOptions): AxiosPromise<any> {
    return ajax({ method: 'PUT', ...args })
  },
  delete(args: RequestOptions): AxiosPromise<any> {
    return ajax({ method: 'DELETE', ...args })
  },
}
