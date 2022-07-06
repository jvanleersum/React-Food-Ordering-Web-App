import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cardItems = [
    {
      id: "c1",
      name: "Sushi",
      amount: 1,
      price: 22.99,
    },
  ].map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cardItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$32.99</span>
      </div>
      <section className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </section>
    </Modal>
  );
};

export default Cart;
