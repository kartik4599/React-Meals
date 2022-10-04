import { useRef } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountRef.current.value;
    const enterAmountNumber = +enterAmount;
    
    props.onAddCart(enterAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ADD</button>
    </form>
  );
};

export default MealItemForm;
