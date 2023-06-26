import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {
    addPosition: (state, action) => {
      return action.payload;
    },
  },
});

export const { addPosition } = positionsSlice.actions;

export default positionsSlice.reducer;
