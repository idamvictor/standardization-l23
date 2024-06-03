import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleItems: 10,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadMore: (state) => {
      state.visibleItems += 8;
    },
  },
});

export const { loadMore } = productSlice.actions;
export default productSlice.reducer;
