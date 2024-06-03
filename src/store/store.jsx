import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../services/products";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";
import productSlice from "./productSlice";

// Middleware to sync cart and favorite state with local storage
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (
    action.type.startsWith("cart/") ||
    action.type.startsWith("favorite/") ||
    action.type === `${productsApi.reducerPath}/fulfilled`
  ) {
    const cartState = store.getState().cart;
    const favoriteState = store.getState().favorite;
    localStorage.setItem("cart", JSON.stringify(cartState));
    localStorage.setItem("favorite", JSON.stringify(favoriteState));
  }
  return result;
};

// Preload state from local storage
const preloadedState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartSlice,
    favorite: favoriteSlice,
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      localStorageMiddleware
    ),
  preloadedState,
});

setupListeners(store.dispatch);

export default store;
