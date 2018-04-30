import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Block, BlockHeader, BlockBody } from '../../components/Block'
import Icon from '../../components/Icon'
import { font, color } from '../../styles'

export default class Series extends React.PureComponent {
  render() {
    return (
      <Block verticalGap={false} style={styles.seriesWrapper}>
        <BlockHeader
          title="剧集"
          moreLink={true}
          linkText="更新至26集 / 周一至周四每晚更新2集"
          onPress={() => { alert('more') }}>
        </BlockHeader>
        <BlockBody>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.series}>
              <View style={styles.serie}><Text style={styles.seriesText}>1</Text></View>
              <View style={[styles.serie, styles.activeSeries]}>
                <Text style={[styles.seriesText, styles.activeSeriesText]}>2</Text>
              </View>
              <View style={styles.serie}><Text style={styles.seriesText}>3</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>4</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>5</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>6</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>7</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>8</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>9</Text></View>
              <View style={styles.serie}><Text style={styles.seriesText}>10</Text></View>
            </View>
          </ScrollView>
        </BlockBody>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  seriesWrapper: {
    marginTop: 1
  },
  series: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serie: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    width: 36,
    height: 36,
    // borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: color.colorBgWeight,
    borderRadius: 2
  },
  activeSeries: {
    backgroundColor: color.green
  },
  seriesText: {
    fontSize: font.nr,
    color: color.blackPrimary
  },
  activeSeriesText: {
    color: color.white
  },
})