import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        fontWeight: "bold"
    }
})