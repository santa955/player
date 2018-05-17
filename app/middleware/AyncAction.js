/**
 * 创建API Action
 * @export
 * @param actionType Action类型
 * @param [func] 请求API方法，返回Promise
 * @param {any} defaultTransformer 数据转换器
 * @returns 请求之前dispatch { type: ${actionType}_request }
 *          请求成功dispatch { type: ${actionType}, payload: ${resolveData} }
 *          请求失败dispatch { type: ${actionType}_failure, payload: ${rejectData} }
 */
export default function AyncAction({ dispatch, getState }) {
  return next => action => {
    const {
      type,
      service = () => { },
      payload = {},
      transformer
    } = action

    try {
      dispatch({ type: type + '_request', params: payload })
      let data = await service(payload)
      // 支持数据转换器
      if (typeof transformer === 'function') data = transformer(data, payload)
      dispatch({ type: type, params: params, payload: data })
    } catch (e) {
      console.warn('AyncAction Middleware error', e)
      dispatch({ type: type + '_failure', params: payload, payload: e })
      failed && failed({ payload: e })
    })
  }
}