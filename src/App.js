import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './App.module.css';
import About from './components/About';
import Order from './components/Order';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Products />
      <Order />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
