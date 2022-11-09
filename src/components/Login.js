import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../feature/games/accountSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const users = useSelector((state) => state.users.value);
  const [userEmail, setUserEmail] = useState("ivan@gmail.com");
  const [userPassword, setUserPassword] = useState("123");
  const [wrongUser, setWrongUser] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    const userExist = users.find((el) => el.email === userEmail);
    if (userExist) {
      if (userExist.password === userPassword) {
        dispatch(login(userExist));
        navigate("/favorites");
      }
    }

    if (userExist) {
      setWrongUser(false);
    } else {
      setWrongUser(true);
    }
  }

  return (
    <form className="login" onSubmit={submitForm}>
      <div className="form-title">Войти</div>
      {wrongUser && <div style={{ color: "red" }}>Нет такого пользователя</div>}

      <label>
        <input
          className="input"
          type="email"
          name="email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          placeholder="Email"
        />
      </label>

      <label>
        <input
          className="input"
          name="password"
          type="password"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
          placeholder="Password"
        />
      </label>

      <button className="form-button" type="submit">
        Войти
      </button>
    </form>
  );
}

export default Login;
