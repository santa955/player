/**
 * 创建API Action
 *
 * @export
 * @param actionType Action类型
 * @param [service] 请求API方法，返回Promise
 * @param {any} defaultTransformer 数据转换器
 * @returns 请求之前dispatch { type: ${actionType}_request }
 *          请求成功dispatch { type: ${actionType}, payload: ${resolveData} }
 *          请求失败dispatch { type: ${actionType}_failure, payload: ${rejectData} }
 */
export function createApiAction(defaultActionType, service = ()=>{}, defaultTransformer) {
  return (
    params = {},
    { actionType = defaultActionType, success, failed, transformer = defaultTransformer } = {}
  ) => async dispatch => {
    try {
      dispatch({ type: actionType + '_request', params });

      let data = await service(params);
      // 数据转换器
      if (typeof transformer === 'function') data = transformer(data, params)
      dispatch({ type: actionType, params, payload: data });

      success && success({ payload: data })
      return Promise.resolve(data)
    } catch (e) {
      logger.warn('createApiAction error', e)
      dispatch({ type: actionType + '_failure', params, payload: e })

      failed && failed({ payload: e })
      return Promise.reject(e)
    }
  }
}