import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Easing, StatusBar } from 'react-native'
import { NavHeader } from '../../components/Header/DetailHeader'
import Icon from '../../components/Icon'
import { Block, blockHeader, blockContent } from '../../components/Block'
import { font, color, layout } from '../../styles'

export default class Category extends React.Component {
  render() {
    return <NavHeader></NavHeader>
  }
}