import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '../Icon'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  playButton: {
    color: '#fff'
  },
  playContainer: {
    flex: 1,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const PlayButton = props => (
  <View style={styles.playContainer}>
    <TouchableOpacity
      onPress={() => props.onPress()}
    >
      <Icon
        type="MaterialCommunityIcons"
        iconStyle={styles.playButton}
        size={56}
        name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'} />
      {/* <Icon
        style={styles.playButton}
        name={props.paused ? 'play-circle-outline' : 'pause-circle-outline'}
        color={props.theme || '#fff'}
        size={75}
      /> */}
    </TouchableOpacity>
  </View>
)

PlayButton.propTypes = {
  onPress: PropTypes.func,
  paused: PropTypes.bool,
  // theme: PropTypes.string
}

PlayButton.defaultProps = {
  onPress: undefined,
  paused: false,
  // theme: null
}

export default PlayButton 
