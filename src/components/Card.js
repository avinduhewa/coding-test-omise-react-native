import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import visaImage from '../../assets/visa.png'
import mastercardImage from '../../assets/mastercard.png'
import jcbImage from '../../assets/jcb.png'
import MaskedCardNumber from './MaskedCardNumber'

const cardTypes = {
  'Visa': visaImage,
  'MasterCard': mastercardImage,
  'JCB': jcbImage
}

export default function Card({ card, onPress }) {
  const { id, last_digits, name, expiration_year, expiration_month, brand } = card

  handleOnPress = () => {
    onPress({
      id: card.id
    })
  }

  return (
    <View key={id} >
      <TouchableOpacity style={styles.container} onPress={handleOnPress}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={cardTypes[brand]} resizeMode="contain"/>
        </View>
        <MaskedCardNumber last_digits={last_digits}/>
        <View style={styles.footer}>
          <View>
            <Text style={styles.label}>Name on Card</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View>
            <Text style={styles.label}>Expires</Text>
            <Text style={styles.text}>{expiration_month}/{expiration_year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 31,
    marginHorizontal: 23,
    marginBottom: 25,
    borderRadius: 12.985,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5, // For Android shadow
  },
  imageContainer: {
    width: 66,
    height: 45,
    marginBottom: 15,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    marginBottom: 13,
    color: '#8F8F8F',
    fontFamily: 'FC-Subject-Rounded-Regular',
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: 'FC-Subject-Rounded-Regular',
  }
})