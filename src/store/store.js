// store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { cardsReducer } from './reducers/cardsReducer';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  middleware: [thunk],
});

export default store;