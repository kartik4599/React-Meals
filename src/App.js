import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Context/CartProvider";

function App() {
  const [showCart,setCart]=useState(false);

  const nowShowCart=()=>{
    setCart(true);
  }
  const hideShowCart=()=>{
    setCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart hidCart={hideShowCart}/>}
      <Header onshowCart={nowShowCart}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
