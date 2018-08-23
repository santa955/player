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
  getRecommends({ type = 0, pageIndex = 1, pageSize = 20, limit = 9 }) {
    return getData('GetRecommends', { type, pageIndex, pageSize, limit })
  },

  /**
   * 获取视频详情数据
   * @param {*} videoId 
   */
  getVideoDetail({ videoId }) {
    return getData('GetVideoDetail', { videoId })
  },

  /**
    * 获取各个频道所有视频
    * @param {*} type 
    * @param {*} pageIndex 
    * @param {*} pageSize 
    */
  getVideos({ type, pageIndex = 1, pageSize = 20 }) {
    return getData('GetVideos', { type, pageIndex, pageSize })
  },

  /**
   * 获取视频的所有剧集
   * @param {String} videoId 
   */
  getVideoEpisode({ videoId }) {
    return getData('GetVideoEpisode', { videoId })
  },

   /**
   * 获取视频的所有剧集
   * @param {String} videoId 
   */
  getRelativeVideo({ videoId }) {
    return getData('GetRelativeVideo', { videoId })
  }
}
