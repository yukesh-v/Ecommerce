import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productSlice,{ ProductsFetch } from './features/productSlice';
import { ProductAPi } from './features/productApi';
import CartSlice, { getTotal } from './features/CartSlice';
import productdetails from './features/productdetailSlice';
import CheckoutSlice from './features/CheckoutSlice';
import WhislistSlice from './features/WhislistSlice';
import AuthSlice from './features/AuthSlice';


const store = configureStore({
  reducer:{
    products:productSlice,
    cart:CartSlice,
    productdetail:productdetails,
    checkout:CheckoutSlice,
    Whishlist:WhislistSlice,
    auth:AuthSlice,
    [ProductAPi.reducerPath]: ProductAPi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductAPi.middleware)
});
store.dispatch(ProductsFetch());
store.dispatch(getTotal());
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>

);


