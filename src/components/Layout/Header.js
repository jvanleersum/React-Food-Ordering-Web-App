import { Fragment } from 'react';
import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg'

const Header = (props) => {
  return(
    <Fragment>
      <header className={classes.header}>
        <h1>Judith's Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}><img alt='A table full of delicious food' src={mealsImage}/></div>
    </Fragment>
  );
} 

export default Header;