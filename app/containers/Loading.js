import React from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'

const Loading = () => (
  <View style={styles.container}>
    {/* <ActivityIndicator /> */}
    <Text>假装是个启动页</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Loading
