const { createSlice } = require('@reduxjs/toolkit');

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) state.push(action.payload);
    },
    removeFilter: (state, action) =>
      state.filter((item) => item !== action.payload),
    clearFilter: (state) => [],
  },
});

export const { addFilter, removeFilter, clearFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
