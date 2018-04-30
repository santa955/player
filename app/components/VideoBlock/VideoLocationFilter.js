import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Block, BlockBody } from '../../components/Block'
import { textColor, bgColor, font, color, layout } from '../../styles'
import Icon from '../Icon'

let { width: screenWidth } = Dimensions.get('window')
const GAPHORIZONTAL = layout.paddingHorizontal
const GAPITEM = 8
export default class VideoLocationFilter extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Block verticalGap={false}>
        <View style={styles.filterContainer}>
          {this.renderFilter(this.props.filters)}
        </View>
      </Block>
    )
  }

  renderFilter(filters) {
    return filters.map((filter, index) => {
      return (<TouchableOpacity
        key={index}
        activeOpacity={1}
        focusedOpacity={1}
        onPress={null}>
        <View style={styles.filterItem}>
          <Text>{filter.name}</Text>
        </View>
      </TouchableOpacity>)
    })
  }
}

VideoLocationFilter.propTypes = {
  filters: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: -6,
  },
  filterItem: {
    marginTop: 6,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    width: (screenWidth - GAPHORIZONTAL * 2 - 3 * GAPITEM) / 4,
    alignItems: 'center',
    borderColor: color.colorDivid,
    borderRadius: 2
  }
})