import { View, Text, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NoCardsFound() {
  const navigation = useNavigation()

  handleAddNewCard = () => {
    navigation.navigate('AddCard')
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.icon}>💳</Text>
        <Text style={styles.text}>No Cards Found</Text>
        <Text style={styles.text}>We recommend adding a card for easy payment</Text>
        <TouchableOpacity onPress={handleAddNewCard}>
          <Text style={styles.link}>Add New Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: -100
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 60
  },
  icon: {
    fontSize: 40,
  },
  text: {
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 25
  },
  link: {
    fontSize: 18,
    color: "#4AD8DA",
    marginBottom: 6
  }
})
