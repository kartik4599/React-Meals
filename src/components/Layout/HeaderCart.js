// import { useContext } from "react";
import CartIcon from "../UI/Icon/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {
  // const cxt=useContext();
  return (
    <button className={classes.button} onClick={props.onshowCart}>
      <span >
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCart;
