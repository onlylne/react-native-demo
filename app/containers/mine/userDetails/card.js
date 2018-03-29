import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

export default class MineCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: '二维码名片',
  });

  constructor(props) {
    super(props)
    this.state={
      imgW:  Dimensions.get('window').width * 0.81,
    }
  }

  componentWillMount() {
    // todo 读取用户数据 storage
    // Image.getSize('http://47.52.202.88:8000/img/qr/201802061229542165.jpg', (width, height) => {
    //   console.log(width, height);
    //   this.setState({
    //     imgW: width,
    //   });
    // });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.cardBox}>
          <View style={styles.userInfo}>
            <Image source={require('../../../images/headImg.png')} style={{width: 60, height: 60, marginRight: 20}}/>
            <View>
              <Text>joiner</Text>
              <Text style={styles.mgt6}>中国🇨🇳</Text>
            </View>
          </View>
          <View style={styles.erCode}>
            <Image style={{width: this.state.imgW, height: this.state.imgW}}
                   source={{uri: 'http://47.52.202.88:8000/img/qr/201802061229542165.jpg'}}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  cardBox: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mgt6: {
    marginTop: 6,
  },
  erCode: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  }
});
