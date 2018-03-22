import normalize from './normalize'

export const color = {
  white: 'rgba(255, 255, 255, 1)',
  green: 'rgba(32, 188, 34, 1)',
  blackPrimary: 'rgba(0, 0, 0, 0.87)',
  blackSecondary: 'rgba(0, 0, 0, 0.54)',
  blackDisabled: 'rgba(0, 0, 0, 0.38)',
  colorDivid: '#efefef',
  colorTip: '#b8b8b8',
  colorBg: '#f8f8f8',
  colorBgWeight: '#f4f4f4',
  blue: 'rgba(0, 114, 198, 0.7)',
  yellow: 'rgb(242, 188, 34)',
  grassGreen: 'rgb(121, 202, 86)',
  red: 'rgb(207, 75, 83)'
}

export const textColor = {
  primary: color.blackPrimary,
  secondary: color.blackSecondary,
  disabled: color.blackDisabled,
  link: color.green,
  white: color.white,
  active: color.green,
  tip: color.colorTip
}

export const bgColor = {
  white: color.white,
  gray: color.colorBg,
  grayWeight: color.colorBgWeight,
  green: 'rgba(32, 188, 34, 0.8)',
  blackLight: color.blackSecondary
}

export const font = {
  xs: normalize(12),
  sm: normalize(14),
  nr: normalize(16),
  md: normalize(18),
  lg: normalize(20),
  xl: normalize(22),
  xxl: normalize(24)
}

export const layout = {
  paddingHorizontal: 8,
  paddingVertical: 16
}