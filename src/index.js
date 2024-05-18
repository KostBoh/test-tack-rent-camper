import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './redux/campersSlice';
import './index.css';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
