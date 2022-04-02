import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; // Old

// install 
// npm install react@18 react-dom@18


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Old way
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
