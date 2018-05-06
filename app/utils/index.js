import { StatusBar, NativeModules, Platform } from 'react-native'

const { StatusBarManager } = NativeModules

export const Version = Platform.Version
export const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT