import { format, XHR } from '../utils'
import apiPrefix from './config'
import urls from './urls'

export let getUri = (apiName, params) => {
  let queryParams = Object.assign({}, { pageIndex: 1, pageSize: 20 }, params)
  let url = urls[apiName]
  let api = format(url, queryParams)
  return apiPrefix + api
}

export let getVideo = () => {
  let url = getUri('GetHomeVideo', { pageIndex: 1, pageSize: 2 })
  return XHR({ url })
}
