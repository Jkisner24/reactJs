import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css';
 */import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA029ehXsB-FOAPRV_lghz0aC7GkCzWkBU",
  authDomain: "shop-coder-471e9.firebaseapp.com",
  projectId: "shop-coder-471e9",
  storageBucket: "shop-coder-471e9.appspot.com",
  messagingSenderId: "853376187282",
  appId: "1:853376187282:web:2d01dbdf2268fc1df2df4b"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


