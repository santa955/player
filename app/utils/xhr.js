import axios from 'axios'
import { isDev } from './env'

const axs = axios.create({
  timeout: 10 * 1000,
  responseType: 'json',
  withCredentials: true
})

export default xhr = ({ url, method = 'get', header = {}, data = {}, success, error }) => {
  let start = Date.now()
  method = method.toLowerCase()
  return new Promise((resolve, reject) => {
    let isPost = /post|put/i.test(method)
    let paraData = isPost ? data : { params: data } //get 请求必须传params，而不是data
    if (isDev) { console.log('API request @', { method, url, data }) }
    axs[method](url, {
      paraData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...header
      }
    }).then(response => {
      let deltatime = Date.now() - start
      response.deltatime = deltatime
      success && success(response)
      resolve(response)
    }, err => {
      error && error(err)
      resolve({})
    })
  })
}