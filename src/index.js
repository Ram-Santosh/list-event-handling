import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './Activity-3';
// import User from './Activity-2';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Users from './Activity-1';

// Activity 1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Users />
//   </React.StrictMode>
// );

// Activity 2
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <User />
//   </React.StrictMode>
// );

// Activity 3
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
