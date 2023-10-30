import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCardToOmiseAccount, createChargeToOmiseCard, fetchAllUserCards } from "../../api/omise";


// Add new card
export const addCard = createAsyncThunk('cards/addCard', async (cardDetails) => {
  try {
    const card = await addCardToOmiseAccount({
      name: cardDetails.name,
      number: cardDetails.number,
      expiration_month: parseInt(cardDetails.expirationMonth, 10),
      expiration_year: parseInt(cardDetails.expirationYear, 10),
      security_code: parseInt(cardDetails.securityCode, 10)
    })

    return card;   
  } catch(err) {
    console.error(err)
  }
})

// Add charge to card
export const createCharge = createAsyncThunk('cards/createCharge', async ({amount, card}) => {
  try{
    const charge = await createChargeToOmiseCard(amount, card)
    return charge
  } catch(err) {
    console.error(err)
  }
})

// Define an async action for fetching data
export const fetchData = createAsyncThunk('data/fetchCards', async () => {
  try {
    const cards = await fetchAllUserCards()
    return cards
  } catch(err) {
    console.error(err)
  }
});

