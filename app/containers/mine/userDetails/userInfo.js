import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

export default class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  static navigationOptions = {
    headerTitle: '个人信息',
    headerBackTitle: '返回',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
        }}>
          <View style={styles.user_item}>
            <Text>头像</Text>
            <Image source={require('../../../images/headImg.png')} style={{width: 60, height: 60}}/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          navigate('EditPage', {title: '修改昵称', content: 'joiner'});
        }}>
          <View style={styles.user_item}>
            <Text>昵称</Text>
            <Text style={styles.color1}>joiner</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
        }}>
          <View style={styles.user_item}>
            <Text>微信号</Text>
            <Text style={styles.color1}>json550884136</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          navigate('MineCard')
        }}>
          <View style={styles.user_item}>
            <Text>二维码名片</Text>
            <Image source={require('../../../images/headImg.png')} style={{width: 20, height: 20}}/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          this.setState({modalVisible: true});
        }}>
          <View style={styles.user_item}>
            <Text>性别</Text>
            <Text style={styles.color1}>男</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {

        }}>
          <View style={styles.user_item}>
            <Text>地区</Text>
            <Text style={styles.color1}>中国</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          navigate('EditPage', {title: '个性签名', content: '零零落落'});
        }}>
          <View style={styles.user_item}>
            <Text>个性签名</Text>
            <Text style={styles.color1}>零零落落</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          navigate('UserAddress');
        }}>
          <View style={styles.user_item}>
            <Text>我的地址</Text>
          </View>
        </TouchableHighlight>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <View style={{width: '80%', backgroundColor: '#fff', borderRadius: 8, padding: 10,}}>
              <Text onPress={() => {
                this.setState({modalVisible: false})
              }}>男</Text>
              <Text onPress={() => {
                this.setState({modalVisible: false})
              }}>女</Text>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  user_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  color1: {
    color: '#999999'
  }
})
