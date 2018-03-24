import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from '../Icon'
import { font, color, layout } from '../../styles'

export default class BlockHeader extends React.PureComponent {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    let {
      style,
      title,
      subTitle,
      headerIcon,
      headerIconStyle,
      ...attr
    } = this.props;

    return (
      <View style={[styles.blockHeader, style]} {...attr}>
        <View style={styles.headerMain}>
          {headerIcon
            && <Icon
              type="SimpleLineIcons"
              name={headerIcon}
              iconStyle={[styles.headerIcon, headerIconStyle]} />
          }
          <View style={styles.headerTitle}>
            <Text style={styles.titleMain}>{title}</Text>
            <Text style={styles.titleSub}>{subTitle}</Text>
          </View>
        </View>
        <View style={styles.headerMore}>
          <Text style={styles.moreLinkText}>更多</Text>
          <Icon
            type="SimpleLineIcons"
            name="arrow-right"
            iconStyle={[styles.moreLink]}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  blockHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.white,
  },

  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerIcon: {
    marginRight: 8,
    fontSize: font.lg,
    color: color.green
  },

  headerTitle: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },

  titleMain: {
    fontSize: font.md,
    color: color.blackPrimary
  },

  titleSub: {
    fontSize: font.xs,
    marginLeft: 8
  },

  headerMore: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  moreLinkText:{
    fontSize: font.sm,
    color: color.blackSecondary
  },

  moreLink:{
    marginLeft: 2,
    fontSize: font.xs - 2,
    color: color.blackSecondary
  }
})