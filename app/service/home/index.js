import React from 'react'
import { AsyncService } from '../../service'
import commonService from '../common'

export default Cmp => class HomeService extends AsyncService {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getWrappedComponent = () => {
    return this.refs.cmp
  }

  requestBanner = this.genAsyncFunc({
    key: 'homeBanner',
    asyncFunc: commonService.getBanner.bind(commonService),
    beforeRequest: (params) => { return params },
    onSuccess: ({ data = [] }) => {
      return {
        scope: { data }
      }
    },
    onError: (err, requestParams, prevScope, prevState) => {
      return err.message
    }
  })

  requestRecommends = this.genAsyncFunc({
    key: 'homeRecommends',
    asyncFunc: commonService.getRecommends.bind(commonService),
    beforeRequest: (params) => { return params },
    onSuccess: ({ data = [] }, { pageIndex, pageSize, limit }, { data: prevData = [] }) => {
      return {
        scope: {
          data: prevData.concat(data),
          isEnd: data.length < pageSize,
          pageIndex,
          pageSize,
          limit
        }
      }
    },
    onError: (err, requestParams, prevScope, prevState) => {
      return err.message
    }
  })

  render() {
    return (
      <Cmp
        {...this.state}
        {...this.props}
        requestBanner={this.requestBanner}
        requestRecommends={this.requestRecommends}
        ref="cmp"
      />
    )
  }
}