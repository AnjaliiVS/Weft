import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const User = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'pink',
    alignItems:'center'
  },
});
export default User;