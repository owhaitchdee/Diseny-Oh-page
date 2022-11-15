import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Name from './components/App';
import DONav from './components/Navbar';
import BannerCarou from './components/Banner';
import Allcards from './components/AllCards';
import DesPF from './components/Hooks';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DONav />
    <DesPF />
    <BannerCarou />
    <Allcards />
    <Name />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
