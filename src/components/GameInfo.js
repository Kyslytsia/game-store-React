import "../css/GameInfo.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteFavoriteGames,
  setFavoritesGames,
  addGameInCart,
  deleteGameInCart,
} from "../feature/games/accountSlice";

function GameInfo(props) {
  const cart = useSelector((state) => state.account.value.cart);
  const games = useSelector((state) => state.games.value);
  const isLogin = useSelector((state) => state.account.value.status);
  const dispatch = useDispatch();
  const isGameinCart = cart.some((game) => game.name === props.gameName);

  const favorites = useSelector((state) => state.account.value.favorites);
  const favoriteGames = favorites.find((el) => el === props.gameName);

  return (
    <div>
      {games.map((el) => {
        if (el.name === props.gameName) {
          return (
            <div
              key={el.name}
              className="bg"
              style={{ backgroundImage: `url(${el.imgB})` }}
            >
              <div className="game-card-sale">
                <div className="name">{el.name}</div>
                <div>{el.genre.join(", ")}</div>
                {el.releaseDate ? <div>доступно с {el.releaseDate}</div> : ""}
                <div className="price"> UAH {el.price}</div>

                <div className="buttons">
                  {isLogin ? (
                    <button
                      className="buy"
                      onClick={() => {
                        isGameinCart
                          ? dispatch(deleteGameInCart(el))
                          : dispatch(addGameInCart(el));
                      }}
                    >
                      {isGameinCart ? "Убрать из корзины" : "В корзину"}
                    </button>
                  ) : (
                    <button className="buy">Зарегестрируйтесть</button>
                  )}

                  {isLogin ? (
                    <button className="heart">
                      <img
                        alt="img"
                        src={
                          require(favoriteGames
                            ? "../img/heart-red.svg"
                            : "../img/heart.svg").default
                        }
                        width="25"
                        onClick={() => {
                          !favoriteGames === false
                            ? dispatch(deleteFavoriteGames(el.name))
                            : dispatch(setFavoritesGames(el.name));
                        }}
                      />
                    </button>
                  ) : (
                    <button className="heart">
                      <img
                        alt="img"
                        src={require("../img/heart.svg").default}
                        width="25"
                      />
                    </button>
                  )}
                </div>
              </div>

              <div className="game-card-info">{el.info}</div>
            </div>
          );
        }

        return "";
      })}
    </div>
  );
}

export default GameInfo;
