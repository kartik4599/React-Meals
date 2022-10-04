import { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const deafultCart = {
    items: [],
    totalAmount: 0,
  };

  const cartReducer = (state, action) => {
    if (action.type === "Add") {
      const updatedItems = [action.item, ...state.items];
      const updatedTotalAmount =
        action.item.price * action.item.amount + state.totalAmount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    if (action.type === "Remove") {
    }
    return deafultCart;
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, deafultCart);

  const addItemHandler = (item) => {
    dispatchCart({ type: "Add", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
