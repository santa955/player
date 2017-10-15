import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

export default class FitImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heigth: 0,
      originalWidth: undefined,
      originalHeight: undefined,
      layoutWidth: undefined,
      isLoading: false,
    }
  }

  componentDidMount() {
    if (this.props.originalWidth && this.props.originalHeight) {
      return;
    }
    this.mounted = true;
    this.refreshStateSize();
  }

  render() {
    let children = this.props.children;
    let ImageComponent = Image;

    if (children && ImageBackground) {
      ImageComponent = ImageBackground;
    }

    return (
      <ImageComponent
        {...this.props}
        onLayout={this.resize}
        onLoad={this.onLoad}
        source={this.props.source}
        style={[
          this.getStyle(),
          this.getWidth(),
          { height: this.state.height },
        ]}
      >
        {children}
      </ImageComponent>
    );
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onLoad = () => {
    this.setState({ isLoading: false });
    this.refreshStateSize();

    if (typeof this.props.onLoad === 'function') {
      this.props.onLoad();
    }
  }

  refreshStateSize = () => {
    let uri;
    if (!this.props.source.uri) {
      return;
    }

    uri = this.props.source.uri;

    Image.getSize(
      uri,
      (width, heigth) => {
        if (!this.mounted) {
          return;
        }
        this.setStateSize(width, heigth);
      },
      () => null,
    );
  }

  setStateSize = (originalWidth, originalHeight) => {
    this.setState({
      originalHeight,
      originalWidth,
    });
  }

  resize = (event) => {
    const { width } = event.nativeEvent.layout;
    const height = this.getHeight(width);

    this.setState({
      height,
      layoutWidth: width,
    });
  }

  getRatio = (width) => {
    const originalWidth = this.getOriginalWidth();

    if (originalWidth === 0) {
      return 0;
    }

    const layoutWidth = width || this.state.layoutWidth || 0;

    return layoutWidth / originalWidth;
  }

  getStyle = () => {
    return StyleSheet.flatten(this.props.style);
  }

  getWidth = () => {
    let style = this.getStyle();
    if (style && style. width) {
      return { width: style.width };
    }
    return { flexGrow: 1 };
  }

  getHeight = (layoutWidth) => {
    return this.getOriginalHeight() * this.getRatio(layoutWidth);
  }

  getOriginalHeight = () => {
    return this.props.originalHeight || this.state.originalHeight || 0
  }

  getOriginalWidth = () => {
    return this.props.originalWidth || this.state.originalWidth || 0
  }
}