import { View, Text, Button, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import NoCardsFound from '../components/NoCardsFound'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { createCharge, fetchData } from '../store/actions/cardsActions'

export default function CardsList() {
  const dispatch = useDispatch()
  const cards = useSelector((state) => state.cards.data)
  const isLoading = useSelector((state) => state.cards.status === 'loading')

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  const createRandomCharge = (card) => {
    dispatch(createCharge({
      amount: 10000,
      card
    }))
  }

  if(isLoading) {
    return (
    <View style={{flex: 1, justifyContent: 'center' }}>
       <ActivityIndicator />
    </View>
    )
  }

  if(cards.length === 0) {
    return <NoCardsFound />
  }

  return (
    <ScrollView style={{padding: 10, backgroundColor: '#FFF'}}>
      {cards.map(card => (
        <Card key={card.id} card={card} onPress={createRandomCharge}/>
      ))}
    </ScrollView>
  )
}