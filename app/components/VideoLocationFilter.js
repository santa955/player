import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { textColor, bgColor, font, color, blockStyle } from '../styles';
import Icon from './Icon';

let { width: screenWidth } = Dimensions.get('window');

export default class VideoLocationFilter extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={[blockStyle.block]}>
        <View style={styles.filterContainer}>
          {this.renderFilter(this.props.filters)}
        </View>
      </View>
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
    marginTop: 0,
    paddingTop: -2,
    paddingBottom: 4,
  },
  filterItem: {
    marginTop: 6,
    paddingVertical: 6,
    borderWidth: StyleSheet.hairlineWidth,
    width: (screenWidth - 64) / 4,
    alignItems: 'center',
    borderColor: color.colorDivid,
    borderRadius: 2
  }
})