import { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/cart-context";
import CartIcon from "../UI/Icon/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {
  const [bump, setbump] = useState(false);
  const cxt = useContext(CartContext);

  const noOfItems = cxt.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${bump && classes.bump}`;
  useEffect(() => {
    if (cxt.items.length === 0) return;
    setbump(true);
    const timer= setTimeout(()=>setbump(false),300);

    return()=>{
      clearTimeout(timer);
    }
  }, [cxt.items]);

  return (
    <button className={btnClasses} onClick={props.onshowCart}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCart;
