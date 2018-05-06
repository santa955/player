import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import Orientation from 'react-native-orientation'
import { HEADERTYPE } from '../consts'
import SearchEntryHeader, { SearchHeader, TitleNavHeader } from '../components/Header'

export default (props) =>
  (WrappedComponent) =>
    class HOC extends React.Component {
      componentWillMount() {
        Orientation.lockToPortrait()
      }
      render() {
        return (
          <View style={{ flex: 1 }}>
            <StatusBar
              backgroundColor="rgba(0, 0, 0, 0)"
              barStyle={props.barStyle}
              translucent={true} />
            {this.renderHeader()}
            <WrappedComponent {...this.props} />
          </View>
        )
      }

      renderHeader() {
        let { type, placeholder = '' } = props.header || {}
        let { navigation } = this.props
        let { navigate } = navigation
        let C = ''
        switch (type) {
          case HEADERTYPE.SEARCHENTRY:
            C = <SearchEntryHeader placeholder={placeholder} navigate={navigate} />
            break
          case HEADERTYPE.TITLENAV:
            C = <TitleNavHeader placeholder={placeholder} navigation={navigation} />
            break
          case HEADERTYPE.SEARCH:
            C = <SearchHeader placeholder={placeholder} navigation={navigation} />
            break
          default:
            C = <SearchEntryHeader placeholder={placeholder} navigate={navigate} />
            break
        }

        return C
      }
    }
