import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  )
}

export default Search

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