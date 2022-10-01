import CartIcon from "../UI/Icon/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart=()=>{
    return(
        <button className={classes.button}>
            <span>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    );
}

export default HeaderCart;