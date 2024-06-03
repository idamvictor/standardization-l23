// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//       const existingProduct = state.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     increaseQuantity(state, action) {
//       const existingProduct = state.find((item) => item.id === action.payload);
//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       }
//     },
//     decreaseQuantity(state, action) {
//       const existingProduct = state.find((item) => item.id === action.payload);
//       if (existingProduct && existingProduct.quantity > 1) {
//         existingProduct.quantity -= 1;
//       }
//     },
//   },
// });

// export const { add, remove, increaseQuantity, decreaseQuantity } =
//   cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    remove(state, action) {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    },
    increaseQuantity(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decreaseQuantity(state, action) {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
