import { Link } from "react-router-dom";
import { logout } from "../feature/games/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../feature/games/usersSlice";
import { useNavigate } from "react-router-dom";
import PositionedMenu from "./PositionedMenu";
import Cart from "./Cart";

function Header() {
  const user = useSelector((state) => state.account.value);
  const isLogin = useSelector((state) => state.account.value.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link className="title" to="/">
        <span>GAME STORE</span>
      </Link>

      <div className="colection-link">
        <Link className="colection" to="/all-games">
          <span>Колекция Игр</span>
        </Link>
      </div>

      <div className="mobile-name-title">{isLogin && "Hi, " + user.name}</div>

      <div className="account">
        {isLogin ? (
          "Hi, " + user.name
        ) : (
          <Link className="log-in" to="/account">
            <span>Login</span>
          </Link>
        )}

        {isLogin && (
          <div
            className="logout"
            onClick={() => {
              dispatch(setUserInfo(user));
              dispatch(logout());
              navigate("/");
            }}
          >
            logout
          </div>
        )}

        <Link to="/favorites" className="favorites">
          <img
            className="img"
            alt="img"
            width="25"
            src={require("../img/heart.svg").default}
          ></img>
          <div className="favorites-length">
            {user.favorites.length > 0 ? user.favorites.length : ""}
          </div>
        </Link>

        <div className="cart">
          <Cart />
        </div>
      </div>

      <div className="account-mobile">
        <div className="mobile-menu">
          <PositionedMenu />
        </div>
        <div className="cart mobile-cart">
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
