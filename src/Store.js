// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices';
import cartReducer from './slices/cartSlices';


const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
