import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Button, SafeAreaView, StyleSheet, View } from 'react-native'
import CardsList from '../screens/CardsList'
import AddCard from '../screens/AddCard'
import IconAdd from '../components/icons/IconAdd'
import IconBack from '../components/icons/IconBack'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { fetchData } from '../store/actions/cardsActions'

const Stack = createStackNavigator()

export const AppStack = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  handleBackNavigation = () => {
      dispatch(fetchData())
      navigation.goBack()
  }

  handleNavigation = () => {
    navigation.navigate('AddCard')
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: true,
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen 
          name="CardsList" 
          component={CardsList} 
          options={{
            headerTitle: "Cards",
            headerLeft: () => <IconBack />,
            headerRight: () => <IconAdd onPress={handleNavigation}/>,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen 
          name="AddCard" 
          component={AddCard}
          options={{
            headerTitle: "",
            headerLeft: () => <IconBack onPress={handleBackNavigation}/>,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  }
})