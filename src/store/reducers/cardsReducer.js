import { createSlice } from "@reduxjs/toolkit";
import { addCard, fetchData, createCharge } from "../actions/cardsActions";
import { Alert } from "react-native";

// reducers/cardsReducer.js
const initialState = {
  data: [], status: 'idle', error: null
};

const cardsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addCard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCharge.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCharge.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // show alert
        Alert.alert('Success', 'Successfully made charge', [{ text: 'OK' }]);
      })
      .addCase(createCharge.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const cardsReducer =  cardsSlice.reducer;
