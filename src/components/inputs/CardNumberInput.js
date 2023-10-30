import React from 'react'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import { Controller } from 'react-hook-form';

import visaImage from '../../../assets/visa.png'
import mastercardImage from '../../../assets/mastercard.png'
import jcbImage from '../../../assets/jcb.png'

const MAX_CARD_NUMBER_LENGTH = 20; // Adjust this to your desired character limit

export default function CardNumberInput(props) {
  const {control, name, errors} = props

  const handleOnTextChange = (text, onChange) => {
    const formattedText = text.replace(/[^\d]/g, '');

    // Add a space every 4 characters
    const spacedText = formattedText.replace(/(\d{4})/g, '$1 ').trim();

    if (spacedText.length <= MAX_CARD_NUMBER_LENGTH) {
      onChange(spacedText);
    }
  }

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>ATM/Debit/Credit card number</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.inputGroup}
              value={value}
              onChangeText={(text) => handleOnTextChange(text, onChange)}
              placeholder="0000 0000 0000 0000"
              name={name}
            />
          )}
          name={name}
        />
        <View style={styles.inputIcons}>
          <Image style={styles.icon} source={visaImage}/>
          <Image style={styles.icon} source={mastercardImage}/>
          <Image style={styles.icon} source={jcbImage}/>
        </View>
      </View>
      {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 22,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'FC-Subject-Rounded-Regular'
  },
  input: {
    height: 56,
    borderColor: '#E6E3E6',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputGroup: {
    fontFamily: 'FC-Subject-Rounded-Regular',
    height: 56,
    padding: 10,
    fontSize: 16
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#E6E3E6',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  inputIcons: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'flex-end'
  },
  icon: {
    width: 25,
    height: 15
  },
  error: {
    color: 'red',
    marginTop: 10
  }
});
