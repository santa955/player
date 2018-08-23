export default urls = {
  'GetBanner': '/recommend/banner/{type}?pageSize={pageSize}&pageIndex={pageIndex}',
  'GetRecommends': '/recommend/mirror?type={type}&pageSize={pageSize}&pageIndex={pageIndex}&limit={limit}',
  'GetRelativeVideo': '/recommend/relative/{videoId}',
  'GetVideos': '/video/{type}?pageSize={pageSize}&pageIndex={pageIndex}',
  'GetVideoDetail': '/video/detail/{videoId}',
  'GetVideoEpisode': '/video/episode/{videoId}',
}