import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import 'font-awesome/css/font-awesome.css'
import {Provider} from 'react-redux'

import store from './redux/store/store'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>

               <App/>

         </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
