import { env } from '../utils'

const version = '/'                     // api版本
const prefix = '/player'                //前缀
const host = {
  'development': 'http://api.yandan66.com',
  'production': ''
}

console.log(env)

export default `${host[env]}${prefix}`