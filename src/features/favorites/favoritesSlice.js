const { createSlice } = require('@reduxjs/toolkit');

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {},
});

export const { actions } = favoritesSlice;
export default favoritesSlice.reducer;
