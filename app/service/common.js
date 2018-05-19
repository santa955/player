import { getUri, getData } from '../service'

export default commonService = {
  /**
   * 获取各个频道首页banner图
   * @param {*} type 
   * @param {*} pageIndex 
   * @param {*} pageSize 
   */
  getBanner({ type = 0, pageIndex = 1, pageSize = 6 }) {
    return getData('GetBanner', { type, pageIndex, pageSize })
  },

  /**
   * 获取各个频道首页数据
   * @param {*} type 
   * @param {*} pageIndex 
   * @param {*} pageSize 
   */
  getRecommends({ type = 0, pageIndex = 1, pageSize = 20 }) {
    return getData('GetRecommends', { type, pageIndex, pageSize })
  },

  /**
   * 获取视频详情数据
   * @param {*} videoId 
   */
  GetVideoDetail({ videoId }) {
    return getData('GetVideoDetail', { videoId })
  },

  /**
   * 获取视频的所有剧集
   * @param {String} videoId 
   */
  getVideoEpisode({ videoId }) {
    return getData('GetVideoEpisode', { videoId })
  }
}
