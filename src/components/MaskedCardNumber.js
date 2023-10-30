import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MaskedCardNumber({last_digits}) {
  return (
    <View style={styles.number}>
      {[1,2,3].map((i) => (
        <Text key={i} style={styles.numberBlockMasked}>
          ••••
        </Text>
      ))}
      <Text style={styles.numberBlock}>
        {last_digits}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  number: {
    marginBottom: 13,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'space-between'

  },
  numberBlock: {
    fontSize: 20, 
    fontWeight: 500,
    lineHeight: 25,
    color: '#808080',
    fontFamily: 'FC-Subject-Rounded-Regular',
  },
  numberBlockMasked: {
    fontSize: 25, 
    fontWeight: 500,
    lineHeight: 20,
    marginRight: 25,
    color: '#808080',
    fontFamily: 'FC-Subject-Rounded-Regular',
  },
})