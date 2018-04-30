import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Block, BlockHeader, BlockBody } from '../../components/Block'
import Icon from '../../components/Icon'
import { font, color } from '../../styles'

export default class Actores extends React.PureComponent {
  render() {
    return (
      <Block verticalGap={true}>
        <BlockHeader title="主要演员" />
        <BlockBody>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.stars}>
              <View style={styles.star}>
                <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/0513000059B7942EADBC0902FB0B7933' }} />
                <Text style={styles.starName}>刘诗诗</Text>
              </View>
              <View style={styles.star}>
                <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/051300005962EF89859B5C051E072CD5' }} />
                <Text style={styles.starName}>陈伟霆</Text>
              </View>
              <View style={styles.star}>
                <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/0513000058A553E2ADBC09033E033F28' }} />
                <Text style={styles.starName}>徐海乔</Text>
              </View>
              <View style={styles.star}>
                <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/051300005888647667BC3C3B1E0AA8DA' }} />
                <Text style={styles.starName}>韩雪</Text>
              </View>
              <View style={styles.star}>
                <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/05130000593F9527859B5C93DD0E6499' }} />
                <Text style={styles.starName}>黄梦莹</Text>
              </View>
              <View style={styles.star}>
                <Image style={styles.starAvart} source={{ uri: 'http://r1.ykimg.com/0513000058870FF667BC3C1D8309BB81' }} />
                <Text style={styles.starName}>刘奕君</Text>
              </View>
            </View>
          </ScrollView>
        </BlockBody>
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    alignItems: 'center',
    marginRight: 16
  },
  starAvart: {
    width: 48,
    height: 48,
    resizeMode: 'cover',
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.colorDivid
  },
  starName: {
    marginTop: 4,
    fontSize: font.xs,
    color: color.secondary
  },
})