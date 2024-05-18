import { configureStore } from '@reduxjs/toolkit';
import advertsSlice from 'features/adverts/advertsSlice';

export default configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});
