import { StatusBar, NativeModules, Platform } from 'react-native'
import format from './format'
import XHR from './xhr'
import env from './env'

const { StatusBarManager } = NativeModules

export const Version = Platform.Version
export const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export { format, XHR, env }