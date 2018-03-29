import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, TouchableHighlight, Text} from 'react-native';

export default class UserAddress extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: '我的地址',
    headerBackTitle: '返回',
    headerRight: <Text style={{fontSize: 24, paddingRight: 14}}
                       onPress={() => {
                         navigation.navigate('EditAddress', {type: 'add'})
                       }}>+</Text>,
  });

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight onPress={() => {
          navigate('EditAddress', {type: 'edit'});
        }}>
          <View style={styles.addressItem}>
            <Text>joiner， 18081011317</Text>
            <Text style={styles.mgt10}>四川 成都 高新区</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          navigate('EditAddress', {type: 'edit'});
        }}>
          <View style={styles.addressItem}>
            <Text>joiner， 18081011317</Text>
            <Text style={styles.mgt10}>四川 成都 高新区</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
          navigate('EditAddress', {type: 'edit'});
        }}>
          <View style={styles.addressItem}>
            <Text>joiner， 18081011317</Text>
            <Text style={styles.mgt10}>四川 成都 高新区</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addressItem: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#eeeeee',
  },
  mgt10: {
    marginTop: 10,
  },
});