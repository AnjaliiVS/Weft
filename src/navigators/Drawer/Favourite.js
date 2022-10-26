import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Favourite() {
  return (
    <View style={styles.container}>
      <Text>Favourite</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      backgroundColor: 'blue',
      alignItems:'center'
    },
  });