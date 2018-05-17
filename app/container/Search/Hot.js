import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Block, BlockHeader, BlockBody } from '../../components/Block'
import { font, color, layout } from '../../styles'

export default class Hot extends React.PureComponent {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={styles.hotWrapper}>
        <Block verticalGap={false} style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
          <Text style={styles.title}>热门</Text>
          <View style={styles.items}>
            {this.renderHotItem()}
          </View>
        </Block>
      </View>
    )
  }

  renderHotItem() {
    let { items = [] } = this.props
    let bg = ['#ff3000', '#ff6000', '#ffb400', '#c1c1c1']
    return items.map((item, index) => {
      return (
        <TouchableOpacity
          style={styles.item}
          key={item.uid}
          activeOpacity={1}
          focusedOpacity={1}
          onPress={() => null}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.itemRank, { backgroundColor: index < 3 ? bg[index] : bg[3] }]}>{index + 1}</Text>
            <Text style={styles.itemText} numberOfLines={1}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )
    })
  }
}


const styles = StyleSheet.create({
  hotWrapper: {},
  title: {
    // marginBottom: 6,
    fontSize: font.sm,
    color: color.blackSecondary,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  item: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    width: '50%',
  },

  itemRank: {
    marginRight: 12,
    color: color.white,
    backgroundColor: '#c1c1c1',
    fontSize: font.xs,
    width: 14,
    height: 14,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 2,
  },

  itemText: {
    paddingRight: 30,
    fontSize: font.sm,
    color: color.blackSecondary
  }
})