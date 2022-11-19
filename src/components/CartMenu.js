import { useSelector } from "react-redux";
import "../css/CartMenu.css";
import CartGame from "./CartGame";

function CartMenu() {
  const cart = useSelector((state) => state.account.value.cart);
  const totalPrice = cart.reduce((acc, game) => (acc += game.price), 0);

  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {cart.length > 0
          ? cart.map((game) => <CartGame name={game.name} price={game.price} />)
          : "Корзина пуста"}
      </div>
      {cart.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{totalPrice} UAH</span>
          </div>
          <button className="cart-button">Оформить заказ</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartMenu;
