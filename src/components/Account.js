import "../css/Accounts.css";
import Login from "./Login";
import Registration from "./Registration";

function Account() {
  return (
    <div className="forms">
      <Login />
      <Registration />
    </div>
  );
}

export default Account;
