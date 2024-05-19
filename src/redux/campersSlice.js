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
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    loading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      const camperId = action.payload;
      if (!state.favorites.includes(camperId)) {
        state.favorites.push(camperId);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(id => id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
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

export const { addFavorite, removeFavorite, setFavorites } =
  campersSlice.actions;

export default campersSlice.reducer;
