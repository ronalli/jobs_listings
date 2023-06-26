import { configureStore } from '@reduxjs/toolkit';
import positionsReducer from './positions/positionSlice';

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
  },
});
