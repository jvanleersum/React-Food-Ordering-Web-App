import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";

const Header = (props) => {
  return(
    <Fragment>
      
      <header className={classes.header}>
        <h1>Judith's Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}><img alt='A table full of delicious food' src={mealsImage}/></div>
    </Fragment>
  );
} 

export default Header;