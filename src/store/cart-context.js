import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  AddItem: (item) => {},
  RemoveItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartItemsReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    if (state.items.filter(item => item.id === action.new.id).length === 0) {
      const newState = [...state.items, action.new];
      const addedAmount = action.new.amount * action.new.price;
      const newTotalAmount = state.totalAmount + addedAmount; 
      return {items: newState, totalAmount: newTotalAmount};
    } else {
      const toUpdateItemIndex = state.items.findIndex(item => item.id === action.new.id)
      state.items[toUpdateItemIndex].amount += action.new.amount
      const addedAmount = action.new.amount * action.new.price;
      const newTotalAmount = state.totalAmount + addedAmount;
      return {items: state.items, totalAmount: newTotalAmount};
    }
  } else if (action.type === 'REMOVE_ITEM'){
    const toRemoveItemIndex = state.items.findIndex(item => item.id === action.id)
    if (state.items[toRemoveItemIndex].amount > 1){
      state.items[toRemoveItemIndex].amount -= 1
    } else {
      state.items.splice(toRemoveItemIndex, 1)
    }
    const newTotalAmount = state.totalAmount - 1;
    return {items: state.items, totalAmount: newTotalAmount};
  }

  return defaultCartState;
}

export const CartContextProvider = (props) => {

  const [cartItems, dispatchCartAction] = useReducer(cartItemsReducer, defaultCartState)

  const AddItem = (orderedItem) => {
    dispatchCartAction({type: "ADD_ITEM", new: orderedItem})
  };

  const RemoveItem = (id) => {
    dispatchCartAction({type: "REMOVE_ITEM", id: id})
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
