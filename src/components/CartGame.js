function CartGame({ name, price }) {
  return (
    <div className="cart-game">
      <span>{name}</span>
      <span>{price} UAH</span>
    </div>
  );
}

export default CartGame;
