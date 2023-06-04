import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cart: [],
   client: null,
   total: 0,
   orders: []
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      dishAdded(state, action) {
         state.cart.push({ ...action.payload, QUANTITY: 1 });
      },

      dishRemoved(state, action) {
         state.cart = state.cart.filter((item) => item.NAME !== action.payload);
      },

      setQuantity(state, action) {
         state.cart = state.cart.map((item) =>
            item.NAME === action.payload.name ? { ...item, QUANTITY: +action.payload.count } : item
         );
      },

      getTotalPrice(state) {
         const countTotalPrice =
            state.cart.length > 0
               ? state.cart.reduce((acc, { PRICE, QUANTITY }) => {
                    acc += PRICE * QUANTITY;
                    return Math.round(acc * 100) / 100;
                 }, 0)
               : 0;

         state.total = countTotalPrice;
      },

      orderRegister(state, action) {
         state.orders.push(action.payload);
      }
   }
});

export const { dishAdded, dishRemoved, setQuantity, getTotalPrice, orderRegister } = cartSlice.actions;

export default cartSlice.reducer;
