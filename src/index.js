import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import "swiper/css/bundle";

import './index.css'
import App from './App'
import { central_store } from './contex/central_store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={central_store}>
    <App />
  </Provider>
)
