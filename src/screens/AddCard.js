import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CardForm from '../components/CardForm'
import { useDispatch } from 'react-redux'
import { addCard, fetchData } from '../store/actions/cardsActions'

export default function AddCard() {
  const navigation = useNavigation()
  const dispatch = useDispatch();


  const handleAddCard = (cardDetails) => {
    dispatch(addCard({
      name: cardDetails.name, 
      number: cardDetails.cardNumber,
      securityCode: cardDetails.securityCode,
      expirationMonth: cardDetails.expiryDate.split('/')[0],
      expirationYear: cardDetails.expiryDate.split('/')[1]
    }))
    .then((response) => {
      dispatch(fetchData())
      navigation.navigate('CardsList')
    })
    .catch((error) => {
      // Handle error if needed
      console.error('Add Card Error:', error);
    });
  };

  return (
    <CardForm 
      handleAddCard={handleAddCard}
    />
  )
}