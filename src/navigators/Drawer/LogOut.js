import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const LogOut = () => {
  return (
    <View style={styles.container}>
      <Text>LogOut</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems:'center'
  },
});
export default LogOut