import { StatusBar, NativeModules, Platform, AsyncStorage } from 'react-native'
import format from './format'
import XHR from './xhr'
import env from './env'

const { StatusBarManager } = NativeModules

export const Version = Platform.Version
export const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export { format, XHR, env }

export const Storage = {
  async get(key) {
    try {
      const value = await AsyncStorage.getItem(`@${key}:key`);
      return value && JSON.parse(value) || {}
    } catch (error) {
      return {}
    }
  },

  async set(key, value) {
    try {
      await AsyncStorage.setItem(`@${key}:key`, JSON.stringify(value));
    } catch (error) { }
  }
}