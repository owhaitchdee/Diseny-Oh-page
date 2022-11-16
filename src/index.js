import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DONav from './components/Navbar';
import Hooks from './components/Hooks';
import BannerCarou from './components/Banner';
import Allcards from './components/AllCards';
import Name from './components/Form';
import Event from './components/Colors';
import Footer from './components/Footer';
// import Func from './components/FuncComponent';
// import ClassComp from './components/ClassComponent';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DONav />
    <Hooks />
    {/* <Func text="Odessa">
      <p>Some text here</p>
    </Func>
  
    <ClassComp text="Odessa2">
      <p>Some text here for class comp</p>
    </ClassComp> */}

    <BannerCarou />
    <Allcards />
    <Name />
    <Event/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
