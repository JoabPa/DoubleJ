import React from 'react';
import classes from './Navbar.module.css';

function Header(props) {
  return (
    <nav className={classes['nav']}>
      <img
        src='img/logo.png'
        alt='DobleJ logo'
        className={classes['nav__logo']}
        id='logo'
        designer='Joab'
      />
      <ul className={classes['nav__links']}>
        <li className={classes['nav__item']}>
          <a className={classes['nav__link']} href='#section--1'>
            Products
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a className={classes['nav__link']} href='#section--2'>
            Order
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a className={classes['nav__link']} href='#section--3'>
            FAQ
          </a>
        </li>
        <li className={classes['nav__item']}>
          <a
            className={`${classes['nav__link']} ${classes['nav__link--btn']} ${classes['btn--show-modal']}`}
            href='#section--1'
          >
            Order drugs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
