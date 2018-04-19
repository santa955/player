import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import Video from 'react-native-video'

const Cover = (props) => {
  return (
    <Video
      key="cover"
      source={props.source}
      style={styles.background}
      rate={1}
      volume={0}
      muted={true}
      resizeMode={props.resizeMode}
      repeat={true} />
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
})

Cover.propTypes = {
  // source: PropTypes.string,
  resizeMode: PropTypes.string
}

Cover.defaultProps = {
  source: '',
  resizeMode: 'cover'
}

export default Cover