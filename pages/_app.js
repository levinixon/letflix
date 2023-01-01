import '../styles/globals.css'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import React from 'react';

function myApp({ Component, pageProps }) {

  return (
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider>,
  )
}

export default myApp
