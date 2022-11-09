import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "../feature/games/usersSlice";

function Registration() {
  const users = useSelector((state) => state.users.value);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordVerify, setUserPasswordVerify] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const dispatch = useDispatch();
  const [registration, setRegistration] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    const emailExist = users.find((el) => el.email === userEmail);
    const verifyPassword = userPassword === userPasswordVerify;

    if (!emailExist) {
      if (verifyPassword) {
        dispatch(
          addNewUser({
            name: userName,
            email: userEmail,
            password: userPassword,
          })
        );
        setRegistration(true);
      }
    }

    if (verifyPassword) {
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }

    if (emailExist) {
      setWrongEmail(true);
    } else {
      setWrongEmail(false);
    }
  }

  return (
    <form className="registration" onSubmit={submitForm}>
      <div className="form-title">Зарегистрироваться</div>
      {wrongEmail && <div style={{ color: "red" }}>такой email существует</div>}
      {wrongPassword && <div style={{ color: "red" }}>неправильный пароль</div>}
      <label>
        <input
          className="input"
          type="text"
          name="name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Name"
        />
      </label>

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

      <label>
        <input
          className="input"
          name="verify-password"
          type="password"
          value={userPasswordVerify}
          onChange={(event) => setUserPasswordVerify(event.target.value)}
          placeholder="Verify Password"
        />
      </label>

      <button className="form-button" type="submit">
        Регестрация
      </button>
      {registration && (
        <div className="registration-status">Регистрация прошла успешно</div>
      )}
    </form>
  );
}

export default Registration;
