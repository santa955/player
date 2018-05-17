import { format, XHR } from '../utils'
import apiPrefix from './config'
import urls from './urls'

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

  if (typeof apiName !== 'String') {
    throw new Error('API名称必须为字符串')
  }

  let url = getUri(apiName, params)
  return XHR({ url })
}

/**
 * 获取各个频道首页banner图
 * @param {*} type 
 * @param {*} pageIndex 
 * @param {*} pageSize 
 */
export let getBanner = (type = 0, pageIndex = 1, pageSize = 6) => {
  return getData('GetBanner', { channel, pageIndex, pageSize })
}

/**
 * 获取各个频道首页数据
 * @param {*} type 
 * @param {*} pageIndex 
 * @param {*} pageSize 
 */
export let getCHLSHome = (type = 0, pageIndex = 1, pageSize = 20) => {
  return getData('GetBanner', { type, pageIndex, pageSize })
}

/**
 * 获取视频详情数据
 * @param {*} videoId 
 */
export let GetVideoDetail = (videoId) => {
  return getData('GetVideoDetail', { videoId })
}

/**
 * 获取视频的所有剧集
 * @param {String} videoId 
 */
export let getVideoEpisode = (videoId) => {
  return getData('GetVideoEpisode', { videoId })
}
