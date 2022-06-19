import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { order: "id" },
  reducers: {
    changeOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
