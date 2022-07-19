import React from 'react';
import classes from './Footer.module.css';

function Footer(props) {
  return (
    <footer className={classes['footer']}>
      <ul className={classes['footer__nav']}>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1#'>
            About
          </a>
        </li>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1'>
            Pricing
          </a>
        </li>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1'>
            Terms of Use
          </a>
        </li>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1'>
            Privacy Policy
          </a>
        </li>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1'>
            Careers
          </a>
        </li>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1'>
            Blog
          </a>
        </li>
        <li className={classes['footer__item']}>
          <a className={classes['footer__link']} href='#section--1'>
            Contact Us
          </a>
        </li>
      </ul>
      <img src='img/icon.png' alt='Logo' className={classes['footer__logo']} />
      <p className={classes['footer__copyright']}>
        &copy; Copyright by
        <a
          className={classes['footer__link twitter-link']}
          href='#section--1'
        >
          Joab Paredes and Jose Penaherrera
        </a>
        
      </p>
    </footer>
  );
}

export default Footer;
