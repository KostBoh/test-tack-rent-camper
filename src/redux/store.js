import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import campersReducer from './campersSlice';

const store = configureStore({
  reducer: {
    // rootReducer,
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
