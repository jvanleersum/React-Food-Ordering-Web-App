import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const AddItemHandler = (orderedAmount) => {
    cartCtx.AddItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: orderedAmount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={AddItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
