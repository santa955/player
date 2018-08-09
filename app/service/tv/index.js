import React from 'react'
import { Storage } from '../../utils'
import { AsyncService } from '../../service'
import commonService from '../common'

export default Cmp => class TVService extends AsyncService {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getWrappedComponent = () => {
    return this.refs.cmp
  }

  requestLocalData = () => {
    // let tvBanner =  Storage.get('tvBanner')
    // let tvRecommends =  Storage.get('tvRecommends')
    // this.setState({
    //   [tvBanner]: {
    //     ...tvBanner,
    //     error: null
    //   },
    //   [tvRecommends]: {
    //     ...tvRecommends,
    //     error: null
    //   }
    // })
  }

  requestBanner = this.genAsyncFunc({
    key: 'tvBanner',
    asyncFunc: commonService.getBanner.bind(commonService),
    beforeRequest: (params) => { return params },
    onSuccess: ({ data = [] }, { pageIndex = 1 }) => {
      pageIndex === 1 && Storage.set('tvBanner', data)
      return {
        scope: { data }
      }
    },
    onError: (err, requestParams, prevScope, prevState) => {
      return err.message
    }
  })

  requestRecommends = this.genAsyncFunc({
    key: 'tvRecommends',
    asyncFunc: commonService.getRecommends.bind(commonService),
    beforeRequest: (params) => { return params },
    onSuccess: ({ data = [] }, { pageIndex = 1 }, { data: prevData = [] }) => {
      pageIndex === 1 && Storage.set('tvRecommends', data)
      return {
        scope: {
          data: prevData.concat(data),
          pageIndex
        }
      }
    },
    onError: (err, requestParams, prevScope, prevState) => {
      return err.message
    }
  })

  requestVideos = this.genAsyncFunc({
    key: 'tvVideos',
    asyncFunc: commonService.getVideos.bind(commonService),
    beforeRequest: (params) => { return params },
    onSuccess: ({ data = [] }, { pageIndex, pageSize }, { data: prevData = [] }) => {
      let isEnd
      return {
        scope: {
          data: prevData.concat(data),
          isEnd: data.length < pageSize,
          pageIndex
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
        requestLocalData={this.requestLocalData}
        requestBanner={this.requestBanner}
        requestRecommends={this.requestRecommends}
        requestVideos={this.requestVideos}
        ref="cmp"
      />
    )
  }
}