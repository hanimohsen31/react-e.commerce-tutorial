import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, OverAllPrice: 0 },
  reducers: {

    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.OverAllPrice = action.payload.OverAllPrice;
    },

    addItems(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.OverAllPrice = state.OverAllPrice + newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          desc: newItem.desc,
          img: newItem.img
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItems(state, action) {
      const itemToRemove = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToRemove.id);

      state.totalQuantity--;
      state.OverAllPrice = state.OverAllPrice - itemToRemove.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemToRemove.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
