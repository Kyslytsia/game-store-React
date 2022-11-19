import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../feature/games/accountSlice";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className="button-menu"
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ color: "white" }}
      >
        menu
      </Button>
      <Menu
        className="menu"
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/account");
          }}
        >
          Войти
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/favorites");
          }}
        >
          Избранное
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/all-games");
            handleClose();
          }}
        >
          Колекция
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(logout());
            navigate("/");
            handleClose();
          }}
        >
          Выйти
        </MenuItem>
      </Menu>
    </div>
  );
}
