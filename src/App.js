import React from 'react';
import classes from './App.module.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className={classes['grid-container']}>
      <Header/>
      <div>About us</div>
      <div>Products</div>
      <div>Order</div>
      <div>FAQ</div>
      <Footer/>
    </div>
  );
}

export default App;
