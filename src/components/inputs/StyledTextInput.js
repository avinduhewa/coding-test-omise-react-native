import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import proptypes from 'prop-types'
import { Controller } from 'react-hook-form';

export default function StyledTextInput(props) {
  const {label, placeholder, containerStyle, control, name, errors} = props
  
  return (
    <View style={{...styles.fieldContainer, ...containerStyle}}>
      <Text style={styles.label}>{label}</Text>
      <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
            />
          )}
          name={name}
        />
        {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </View>
  )
}

StyledTextInput.defaultProps = {
  containerStyle: {}
}

StyledTextInput.propTypes = {
  label: proptypes.string.isRequired,
  // value: proptypes.string.isRequired,
  // onChange: proptypes.func.isRequired,
  placeholder: proptypes.string,
  containerStyle: proptypes.shape({})
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 22,
  },
  label: {
    fontSize: 15,
    fontFamily: 'FC-Subject-Rounded-Regular',
    fontWeight: 400,
    marginBottom: 8,
  },
  input: {
    height: 56,
    borderColor: '#E6E3E6',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20
  },
  error: {
    color: 'red',
    marginTop: 10
  }
})