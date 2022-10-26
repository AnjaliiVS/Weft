import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Help = () => {
  return (
    <View style={styles.container}>
      <Text>Help</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'grey',
    alignItems:'center'
  },
});
export default Help