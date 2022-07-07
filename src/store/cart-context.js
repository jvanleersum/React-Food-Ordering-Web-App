import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  AddItem: (item) => {},
  RemoveItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartItemsReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const addedAmount = action.new.amount * action.new.price;
    const newTotalAmount = state.totalAmount + addedAmount;
    const toUpdateItemIndex = state.items.findIndex(
      (item) => item.id === action.new.id
    );
    const toUpdateItem = state.items[toUpdateItemIndex];
    let updatedState;
    if (toUpdateItem) {
      const updatedItem = {
        ...toUpdateItem,
        amount: toUpdateItem.amount + action.new.amount,
      };
      updatedState = [...state.items];
      updatedState[toUpdateItemIndex] = updatedItem;
    } else {
      updatedState = [...state.items, action.new];
    }
    return { items: updatedState, totalAmount: newTotalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    const toRemoveItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const toRemoveItem = state.items[toRemoveItemIndex];
    let updatedState = [...state.items];
    if (toRemoveItem.amount > 1) {
      toRemoveItem.amount -= 1;
    } else {
      updatedState.splice(toRemoveItemIndex, 1);
    }
    const newTotalAmount = state.totalAmount - toRemoveItem.price;
    return { items: updatedState, totalAmount: newTotalAmount };
  }

  return defaultCartState;
};

export const CartContextProvider = (props) => {
  const [cartItems, dispatchCartAction] = useReducer(
    cartItemsReducer,
    defaultCartState
  );

  const AddItem = (orderedItem) => {
    dispatchCartAction({ type: "ADD_ITEM", new: orderedItem });
  };

  const RemoveItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartItems.items,
        totalAmount: cartItems.totalAmount.toFixed(2),
        AddItem: AddItem,
        RemoveItem: RemoveItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
