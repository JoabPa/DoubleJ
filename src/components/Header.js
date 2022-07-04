import React from 'react';
import classes from './Header.module.css';

function Header(props) {
  return (
    <header className={classes['header']}>
      <span>About us</span>
      <span>In-stock</span>
      <span>Order</span>
      <span>FAQ</span>
    </header>
  );
};

export default Header;
