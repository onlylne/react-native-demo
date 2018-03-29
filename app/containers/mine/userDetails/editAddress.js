import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
} from 'react-native';
import Picker from 'react-native-picker'

export default class EditAddress extends Component {

  static navigationOptions = ({navigation}) => {
    const {type} = navigation.state.params
    return ({
      headerTitle: `${type === 'edit' ? '编辑' : '新增'}地址`,
    })
  };

  constructor(props) {
    super(props)
    this.state = {
      activeFocus: '',
      name: '',
      tel: '',
      area: '',
      details: '',
      code: '',
      showScreen: false,
    }
  };

  componentWillMount() {
    const addrData = [{
      '北京': [
        {
          '北京': ['朝阳区', '东城区', '西城区', '石景山区']
        },
      ]
    },
      {
        '四川': [
          {
            '成都': ['高新区', '天府新区', '双流区', '金牛区']
          },
          {
            '南充': ['顺庆区', '嘉陵区', '高坪区', '南部县']
          },
          {
            '绵阳': ['涪城区', '游仙区', '三台县', '江油市']
          }
        ]
      },
      {
        '浙江': [
          {
            '宁波': ['海曙区', '江东区', '江北区']
          }
        ]
      }];
    Picker.init({
      pickerData: addrData,
      selectedValue: [1, 2, 1],
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '地区选择',
      onPickerConfirm: data => {
        this.setState({
          showScreen: false,
          area: data.toString().replace(/,/g," "),
        })
        console.log(data)
      },
      onPickerCancel: data => {
        this.setState({
          showScreen: false,
        })
        console.log(data)
      },
      onPickerSelect: data => {
        console.log(data)
      }
    });
  }

  componentWillUnmount() {
    Picker.hide();
  }

  render() {

    return (
      <View style={styles.containerOuter}>
        <View style={styles.container}>
          <View style={[styles.infoItem, this.state.activeFocus === 'name' ? styles.inputActive : '']}>
            <Text style={styles.title}>收货人</Text>
            <TextInput
              style={styles.inputArea}
              autoCapitalize='none'
              placeholder='请输入收货人'
              placeholderTextColor='#aaaaaa'
              clearButtonMode={'while-editing'}
              onFocus={() => this.setState({activeFocus: 'name'})}
            />
          </View>
          <View style={[styles.infoItem, this.state.activeFocus === 'tel' ? styles.inputActive : '']}>
            <Text style={styles.title}>电话号码</Text>
            <TextInput
              style={styles.inputArea}
              autoCapitalize='none'
              placeholder='请输入电话号码'
              keyboardType={'numeric'}
              placeholderTextColor='#aaaaaa'
              clearButtonMode={'while-editing'}
              onFocus={() => this.setState({activeFocus: 'tel'})}
            />
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.title}>地区信息</Text>
            <Text style={[styles.AreaInfo, this.state.area ? '' : styles.defaultColor]}
                  onPress={() => {
                    this.setState({showScreen: true})
                    Picker.show()
                  }}>
              {this.state.area || '地区信息'}
            </Text>
          </View>

          <View style={[styles.infoItem, this.state.activeFocus === 'details' ? styles.inputActive : '']}>
            <Text style={styles.title}>详细地址</Text>
            <TextInput
              style={styles.inputArea}
              autoCapitalize='none'
              placeholder='请输入详细地址'
              placeholderTextColor='#aaaaaa'
              clearButtonMode={'while-editing'}
              onFocus={() => this.setState({activeFocus: 'details'})}
            />
          </View>
          <View style={[styles.infoItem, this.state.activeFocus === 'code' ? styles.inputActive : '']}>
            <Text style={styles.title}>邮政编码</Text>
            <TextInput
              style={styles.inputArea}
              autoCapitalize='none'
              placeholder='请输入邮政编码'
              keyboardType={'numeric'}
              placeholderTextColor='#aaaaaa'
              clearButtonMode={'while-editing'}
              onFocus={() => this.setState({activeFocus: 'code'})}
            />
          </View>

        </View>
        { this.state.showScreen && <View style={styles.pickerScreen} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerOuter: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
  },
  container: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
  },
  title: {
    width: 80,
    padding: 10,
    fontSize: 16,
  },
  inputArea: {
    flexGrow: 1,
    height: 36,
    paddingLeft: 10,
    fontSize: 16,
  },
  inputActive: {
    borderBottomWidth: 1,
    borderBottomColor: '#49a9ee',
  },
  AreaInfo: {
    flexGrow: 1,
    paddingLeft: 10,
    fontSize: 16,
    height: 40,
    lineHeight: 40,
  },
  defaultColor: {
    color: '#aaaaaa',
  },
  pickerScreen: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.4)',
  }
});
