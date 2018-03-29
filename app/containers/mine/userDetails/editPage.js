import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'

export default class EditPage extends Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    return ({
      headerTitle: params.title || '',
    });
  };

  constructor(props) {
    super(props);
    const {content} = this.props.navigation.state.params;
    this.state = {
      content: content,
    }
  }

  componentDidMount() {
    // console.log('进来了')
  }

  componentWillUnmount() {
    // console.log('离开了')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize='none'
          value={this.state.content}
          autoFocus
          style={styles.inputStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  inputStyle: {
    marginTop: 4,
    height: 40,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#49a9ee',
  }
});