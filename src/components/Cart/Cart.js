import classes from "./Cart.module.css";

const Cart = (props) => {
  const totalList = (
    <ul className={classes['cart-items']}>
      {[].map((element) => {
        return <li>{element.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {totalList}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
