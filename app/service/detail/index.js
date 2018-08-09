import React from 'react'
import { Storage } from '../../utils'
import { AsyncService } from '../../service'
import commonService from '../common'

export default Cmp => class DetailService extends AsyncService {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getWrappedComponent = () => {
    return this.refs.cmp
  }

  requestVideoDetail = this.genAsyncFunc({
    key: 'videoDetail',
    asyncFunc: commonService.getVideoDetail.bind(commonService),
    beforeRequest: (params) => { return params },
    onSuccess: ({ data = [] }) => {
      return {
        scope: { data: data[0] || {} }
      }
    },
    onError: (err, requestParams, prevScope, prevState) => {
      return err.message
    }
  })

  requestVideoEpisode = this.genAsyncFunc({
    key: 'videoEpisode',
    asyncFunc: commonService.getVideoEpisode.bind(commonService),
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
    key: 'videoRecommends',
    asyncFunc: commonService.getRecommends.bind(commonService),
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

  render() {
    return (
      <Cmp
        {...this.state}
        {...this.props}
        requestVideoDetail={this.requestVideoDetail}
        requestVideoEpisode={this.requestVideoEpisode}
        requestRecommends={this.requestRecommends}
        ref="cmp"
      />
    )
  }
}