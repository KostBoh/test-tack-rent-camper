import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async () => {
    const response = await axios.get(
      'https://6644d761b8925626f8902dcf.mockapi.io/contacts/adverts/'
    );
    return response.data;
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
