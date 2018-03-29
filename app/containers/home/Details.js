import React, { Component } from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from '../../utils'

@connect()
class Details extends Component {
  static navigationOptions = ({navigation,screenProps}) => {
    return ({
      headerTitle: navigation.state.params.headerTitle,
    });
  };

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={()=>{ goBack() }}
          title="go back"
        />
      </View>
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
})

export default Details