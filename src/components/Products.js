import React from 'react';
import classes from './Products.module.css';

function Products(props) {
  return (
    <section className={classes['products']}>
      <h1 className={classes['title']}>Check out what we have ;)</h1>
      <div className={classes['products-grid']}>
        <div className={classes['card']}></div>
        <div className={classes['card']}></div>
        <div className={classes['card']}></div>
        <div className={classes['card']}></div>
      </div>
    </section>
  );
}

export default Products;
