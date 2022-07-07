import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  
  const onAddItemHandler = (item) => {
    cartCtx.AddItem(item);
  }

  const onRemoveItemHandler = (id) => {
    cartCtx.RemoveItem(id)
  }

  const cardItems =
    cartCtx.items.length > 0 ? (
      cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemoveItemHandler.bind(null, item.id)}
          onAdd={onAddItemHandler.bind(null, item)}
        />
      ))
    ) : (
      <p>No items in the Cart.</p>
    );

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>{cardItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{"$" + cartCtx.totalAmount}</span>
      </div>
      <section className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </section>
    </Modal>
  );
};

export default Cart;
