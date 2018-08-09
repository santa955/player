import React from 'react'
import { format, XHR } from '../utils'
import apiPrefix from './config'
import urls from './urls'

export class AsyncService extends React.Component {
  /**
   * 通用的异步请求处理函数
   * state中以key保存的此请求的相关数据空间叫做scope
   * scope中会设置如下数据{isRequesting, error}
   * 在请求成功和失败后，可以向scope和state中设置新的数据
   * @param { object } options
   *   {string} key - 在state中保存此次请求相关参数的scope的key
   *   {function} asyncFunc - 异步处理函数，返回Promise
   *   {function} beforeRequest - 处理请求参数的函数
   *   {function} onSuccess - 请求成功后的处理函数，返回新的scope和state将会被设置到state中
   *   {function} onError - 请求失败后的处理函数，返回新的scope和state将会被设置到state中
   * @memberof AsyncContainer
   */
  genAsyncFunc = ({
    key, asyncFunc,
    beforeRequest = a => a,
    onSuccess = () => { },
    onError = () => { } }) => (params = {}) => {
      return new Promise(async (resolve, reject) => {
        // 请求所属的scope
        const scope = this.state[key] || {}
        if (scope.isRequesting) return
        // 本次请求的参数
        let requestParams = beforeRequest(params, scope, this.state, this.props)
        if (requestParams === false) return
        this.setState({
          [key]: {
            ...scope,
            isRequesting: true,
            error: null
          }
        })
        try {
          let response = await asyncFunc(requestParams)
          this.setState(prevState => {
            const prevScope = prevState[key]
            const { scope, state } = onSuccess(response, requestParams, prevScope, prevState) || {}
            return {
              [key]: {
                ...prevScope,
                isRequesting: false,
                ...scope
              },
              ...state
            }
          }, () => resolve(this.state[key]))
        } catch (err) {
          if (process.env.NODE_ENV === 'development') {
            console.error('AsyncService error', err)
          }
          this.setState(prevState => {
            const prevScope = prevState[key]
            const { scope, state } = onError(err, requestParams, prevScope, prevState) || {}
            return {
              [key]: {
                ...prevScope,
                isRequesting: false,
                error: err.message && err.message.message,
                ...scope
              },
              ...state
            }
          }, () => reject(this.state[key]))
        }
      })
    }
}

export let getUri = (apiName, params) => {
  let queryParams = Object.assign({}, { pageIndex: 1, pageSize: 20 }, params)
  let url = urls[apiName]
  let api = format(url, queryParams)
  return apiPrefix + api
}

export let getData = (apiName, params) => {
  if (typeof apiName === 'undefined') {
    throw new Error('必须传入API名称')
  }

  if (typeof apiName !== 'string') {
    throw new Error('API名称必须为字符串')
  }

  let url = getUri(apiName, params)
  return XHR({ url })
}