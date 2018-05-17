const { NODE_ENV } = process.env
const env = NODE_ENV.toLowerCase()
const isDev = env === 'development'
const isProd = env === 'production'

export { env as default, isDev, isProd }