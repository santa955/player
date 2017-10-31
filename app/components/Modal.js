import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Easing,
  Animated
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { textColor, font, color, bgColor, blockStyle } from '../styles';
import Icon from './Icon';

let screen = Dimensions.get('window');

export default class Modal extends React.PureComponent {
  static defaultProps = {
    animationDuration: 400,
    openInStart: false,
    easing: Easing.elastic(0.8),
  }
  static propTypes = {
   
  }
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      width: screen.width,
      height: screen.height,
      position: new Animated.Value(0),
    }
  }
  componentWillMount() {
    let { height, openOnStart } = this.props;
    this.handleOpenning(this.props);

    this.setState({ height: height ? height : this.state.height });
  }
  render() {
    let visible = this.state.isOpen;
    if (!visible) return <View />

    return (
      <View style={{ flex: 1 }} pointerEvents={'box-none'} onLayout={this.onContainerLayout}>
        {visible && this.renderContent()}
      </View>
    )

    return this.renderContent()
  }

  handleOpenning(props) {
    if (typeof props.isOpen == 'undefined') return;
    if (props.isOpen) {
      this.open()
    }
  }

  renderContent() {
    return (
      <View style={[blockStyle.block, styles.absolute]}>
        <View style={[blockStyle.blockHeader, styles.modalHeader]}>
          <View style={blockStyle.headerMain}>
            <View style={blockStyle.titleMain}>
              <Text style={[blockStyle.mainTitle]}>{this.props.title}</Text>
            </View>
            <View style={[blockStyle.rightLink, blockStyle.mainTitleLink]}>
              <TouchableOpacity
                activeOpacity={1}
                focusedOpacity={1}
                onPress={null}>
                <Icon style={blockStyle.linkIcon}
                  type="Ionicons"
                  name="md-close"
                  size={26}
                  iconStyle={styles.modalIconClose}>
                </Icon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[blockStyle.blockContent, styles.modalContent]}>
          {this.props.children}
        </View>
      </View>
    )
  }

  onContainerLayout(evt) {
    let height = evt.nativeEvent.layout.height;
    let width = evt.nativeEvent.layout.width;

    if (this.state.isOpen) {
      this.animateOpen();
    }

    if (this.props.onLayout) this.props.onLayout(evt);
    this.setState({
      height: height,
      width: width
    });
  }

  animateOpen() {
    requestAnimationFrame(() => {
      this.state.animOpen = Animated.timing(
        this.state.position,
        {
          toValue: this.state.height,
          duration: this.props.animationDuration,
          easing: this.props.easing,
        }
      );
      this.state.animOpen.start(() => {
        if (!this.state.isOpen && this.props.onOpened) this.props.onOpened();
        this.state.isAnimateOpen = false;
        this.state.isOpen = true;
      });
    })
  }

  open() {
    if (!this.state.isAnimateOpen) {
      this.onViewLayoutCalculated = () => {
        this.setState({});
        this.animateOpen();
        delete this.onViewLayoutCalculated;
      };
      this.setState({ isAnimateOpen: true });
    }
  }

}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: bgColor.white
  },
  modalHeader: {

  },
  modalIconClose: {
    color: textColor.secondary,
  },
  modalContent: {
    // borderTopWidth: 1,
  }
})