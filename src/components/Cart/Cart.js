import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cxt = useContext(CartContext);

  const totalAmount = `$${cxt.totalAmount.toFixed(2)}`;

  const hasItem = cxt.items.length > 0;

  const removeItemHandler = (id) => {};

  const addItemHandler = (item) => {};

  const totalList = (
    <ul className={classes["cart-items"]}>
      {cxt.items.map((element) => {
        return (
          <CartItem
            name={element.name}
            onRemove={removeItemHandler.bind(null, element.id)}
            onAdd={addItemHandler.bind(null, element)}
            key={element.id}
            amount={element.amount}
            price={element.price}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.hidCart}>
      {totalList}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.hidCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
