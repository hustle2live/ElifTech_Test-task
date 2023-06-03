import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cart: [],
   client: null,
   summary: 0
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

      moreDish(state, action) {
         state.cart = state.cart.map((item) =>
            item.NAME === action.payload ? { ...item, QUANTITY: item.QUANTITY + 1 } : item
         );
      },

      lessDish(state, action) {
         state.cart = state.cart.map((item) => {
            if (item.NAME === action.payload) return --item.QUANTITY;
         });
      },

      todoToggled(state, action) {
         const todo = state.entities.find((todo) => todo.id === action.payload);
         todo.completed = !todo.completed;
      },

      todosLoading(state, action) {
         return {
            ...state,
            status: 'loading'
         };
      }
   }
});

export const { dishAdded, dishRemoved, moreDish, lessDish, setQuantity } = cartSlice.actions;

export default cartSlice.reducer;
