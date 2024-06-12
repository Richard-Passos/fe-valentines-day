import { createSlice } from '@reduxjs/toolkit';

import { normId } from '@/utils';

const initialState = {
  items: []
};

const storeSlicesCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.items = [normId(payload), ...state.items];
    },
    removeItem: (state, { payload }) => {
      const items = [...state.items];

      const itemIdx = state.items.findIndex((item) => item === normId(payload));

      items.splice(itemIdx, 1);

      state.items = items;
    }
  }
});

export default storeSlicesCart;
export const { addItem, removeItem } = storeSlicesCart.actions;
