import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function IconAdd({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 10}}>
      <Ionicons name="add" size={40} color="black"/>
    </TouchableOpacity>
  )
}