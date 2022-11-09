import CartMenu from "./CartMenu";
import { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const [menuVisible, setMenuVisible] = useState(false);
  const cart = useSelector((state) => state.account.value.cart);

  return (
    <div className="cart-block">
      <img
        className="img"
        alt="img"
        width="20"
        src={require("../img/cart.svg").default}
        onClick={() => setMenuVisible(!menuVisible)}
      ></img>
      {cart.length > 0 && <div className="cart-length">{cart.length}</div>}
      {menuVisible && <CartMenu />}
    </div>
  );
}

export default Cart;
