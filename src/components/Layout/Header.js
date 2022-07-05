import { Fragment } from 'react';
import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return(
    <Fragment>
      <header className={classes.header}>
        <h1>Judith's Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}><img alt='A table full of delicious food' src={mealsImage}/></div>
    </Fragment>
  );
} 

export default Header;