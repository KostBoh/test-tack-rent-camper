import { configureStore } from '@reduxjs/toolkit';
import campersReducer, { setFavorites } from './campersSlice';

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

window.addEventListener('storage', event => {
  if (event.key === 'favorites') {
    const favorites = JSON.parse(event.newValue);
    store.dispatch(setFavorites(favorites));
  }
});

export default store;
