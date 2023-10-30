// All external services for Omise
import Omise from 'omise-react-native';
import { OMISE_PUBLIC_KEY, OMISE_SECRET_KEY, CUSTOMER_ID } from '@env'

const version = '2019-05-29'

export const fetchAllUserCards = async () => {
  Omise.config(OMISE_SECRET_KEY, version)

  const user = await Omise.retrieveCustomer(CUSTOMER_ID)

  return user?.cards?.data || []
}

export const addCardToOmiseAccount = async (card) => {
  Omise.config(OMISE_PUBLIC_KEY, version)

  const cardToken = await Omise.createToken({
    card
  })

  Omise.config(OMISE_SECRET_KEY, version)

  const userUpdate = await Omise.updateCustomer(CUSTOMER_ID, {
    card: cardToken.id
  })

  return cardToken
}

export const createChargeToOmiseCard = async (amount, card) => {
  Omise.config(OMISE_PUBLIC_KEY, version)

  const source = await Omise.createSource({
    amount: amount, 
    currency: 'thb',
    type: 'internet_banking_bbl'
  })

  return source
}