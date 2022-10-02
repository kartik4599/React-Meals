import HeaderCart from "./HeaderCart";
import classes from "./Header.module.css";
import Image from "../../assets/meals.jpg";

const Header = (props) => {

  return (
    <>
      <div className={classes["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCart onshowCart={props.onshowCart}/>
      </div>
      <div className={classes["main-image"]}>
        <img src={Image} alt="error 404" />
      </div>
    </>
  );
};

export default Header;
