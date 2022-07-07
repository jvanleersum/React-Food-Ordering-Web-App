import { useRef, useState } from 'react';
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const AddItemToCart = (e) => {
    e.preventDefault();
    const orderedAmount = amountInputRef.current.value;
    const orderedAmountNumber = +orderedAmount
    if (orderedAmount.trim().length === 0 || orderedAmountNumber < 1 || orderedAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true)
    props.onAddItem(+orderedAmount);
  }

  return (
    <form className={classes.form} onSubmit={AddItemToCart}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
