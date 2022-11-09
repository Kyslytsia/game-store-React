import { Link } from "react-router-dom";
import "../css/Favorites.css";
import { useSelector, useDispatch } from "react-redux";
import { addGameInCart, deleteGameInCart } from "../feature/games/accountSlice";

function Favorites(props) {
  const isLogin = useSelector((state) => state.account.value.status);

  const games = useSelector((state) => state.games.value);
  const favorites = useSelector((state) => state.account.value.favorites);
  const favoriteGames = favorites.map((favGames) => {
    const result = games.find((el) => el.name === favGames);
    return result;
  });

  const cart = useSelector((state) => state.account.value.cart);

  const dispatch = useDispatch();

  function checkCart(el) {
    const isGameInCart = cart.some((game) => game.name === el);
    return isGameInCart;
  }

  if (!isLogin) {
    return <span className="not-login">Пожалуйста зарегистрируйтесть</span>;
  }

  return (
    <div>
      {isLogin && <div className="favorites-title">Избранное</div>}

      <div className="favorites-games-block">
        {favoriteGames.map((el) => {
          return (
            <div
              onClick={() => props.getGameName(el.name)}
              style={{ backgroundImage: el.imgS }}
              className="favorites-game-card"
              key={el.name}
            >
              <Link className="link" to="/game-info">
                <img
                  className="favorites-game-img"
                  src={el.imgS}
                  alt={el.name}
                ></img>
              </Link>

              <div>
                <span className="favorites-game-name">{el.name}</span>
                <div className="favorites-price">{el.price} UAH.</div>

                {checkCart(el.name) && (
                  <button
                    className="favorites-button"
                    onClick={() => {
                      dispatch(deleteGameInCart(el));
                    }}
                  >
                    удалить с корзины
                  </button>
                )}

                {!checkCart(el.name) && (
                  <button
                    className="favorites-button"
                    onClick={() => {
                      dispatch(addGameInCart(el));
                    }}
                  >
                    в корзину
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
