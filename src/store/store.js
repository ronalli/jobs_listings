import { configureStore } from '@reduxjs/toolkit';
import positionsReducer from './positions/positionSlice';
import filtersReducer from './filters/filterSlice';

export const store = configureStore({
  reducer: {
    positions: positionsReducer,
    filters: filtersReducer,
  },
});
