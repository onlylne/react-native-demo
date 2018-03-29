import React, {Component} from 'react';

import {
  StyleSheet,
  Dimensions,
  Animated,
  ART
} from 'react-native';

const AnimatedShape = Animated.createAnimatedComponent(ART.Shape);

export default class Circle extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      posX: 20,
      posY: 21,
      moveX: 1,
      moveY: 1,
      rotateNum: 0,
      value: new Animated.Value(0),
    };
  }

  autoMove = () => {
    const {width, height} = Dimensions.get('window');

    this.moveFunc = () => {
      let moveX = this.state.moveX;
      let moveY = this.state.moveY;
      let rotateNum = this.state.rotateNum;

      if (this.state.posX + 2 >= width - 20) {
        moveX = -Math.abs(moveX);
      }
      if (this.state.posX - 2 <= 23) {
        moveX = Math.abs(moveX);
      }
      if (this.state.posY + 2 >= height - 90) {
        moveY = -Math.abs(moveY);
      }
      if (this.state.posY - 2 <= 26) {
        moveY = Math.abs(moveY);
      }
      rotateNum -=20;
      this.setState({
        posX: this.state.posX + moveX,
        posY: this.state.posY + moveY,
        moveX,
        moveY,
        rotateNum,
      });
    };
    this.intervalId = setInterval(this.moveFunc, 5);
  };

  infiniteAnimate = () => {
    Animated.timing(this.state.value, {
      duration: 1000,
      toValue: 1
    }).start(() => {
      Animated.timing(this.state.value, {
        duration: 2000,
        toValue: 0
      }).start(this.infiniteAnimate);
    });
  };

  componentWillMount() {
    this.autoMove();
    this.infiniteAnimate();
  }

  componentWillUnmount() {
    // console.log('12312')
  }

  render() {
    const path = new ART.Path()
      // .moveTo(this.state.posX, this.state.posY)
      .moveTo(0, 0)
      .arc(0, -2, 1)
      .arc(0, 6, 3)
      .arc(0, -10, 5)
      .arc(0, 14, 7)
      .arc(0, -18, 9)
      .arc(0, 22, 11)
      .arc(0, -26, 13)
      .arc(0, 30, 15)
      .arc(0, -34, 17)
      .arc(0, 38, 19)
      .arc(0, -38, 19);

    return (
      <AnimatedShape
        d={path}
        fill="#00ff00"
        stroke="#ff0000"
        x={this.state.posX}
        y={this.state.posY}
        strokeWidth={1}
        // scale={this.state.value}
        transform={new ART.Transform().rotate(this.state.rotateNum)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});