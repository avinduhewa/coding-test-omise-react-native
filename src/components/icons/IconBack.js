import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function IconBack({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 10}}>
      <MaterialIcons name="arrow-back" size={32} color="black"/>
    </TouchableOpacity>)
}