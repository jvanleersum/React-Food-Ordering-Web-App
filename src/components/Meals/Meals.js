import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Cart from "../Cart/Cart";

const Meals = (props) => {
  return(
    <Fragment>
      <MealsSummary />
      <Cart />
      <AvailableMeals items={props.items}/>
    </Fragment>
  );
}

export default Meals;
