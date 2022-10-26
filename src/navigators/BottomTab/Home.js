import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontsize:20,color:"black"}}>Home</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    alignItems:'center'
  },
});
export default Home