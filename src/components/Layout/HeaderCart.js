import { useContext } from "react";
import CartContext from "../../Context/cart-context";
import CartIcon from "../UI/Icon/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {
  const cxt = useContext(CartContext);

  const noOfItems = cxt.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onshowCart}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCart;