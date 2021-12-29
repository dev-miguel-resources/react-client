import React from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import useCurrentItemHeader from "../../hooks/useCurrentItemHeader";

const { SubMenu, Item } = Menu;

const Header = () => {
  const { setKey } = useCurrentItemHeader();
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart, header, user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({ type: "LOGOUT", payload: null });
    history.push("/login");
  };

  return (
    <Menu
      onClick={({ key }) => setKey(key)}
      selectedKeys={[header]}
      mode="horizontal"
    >
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <Item key="shop" icon={<ShoppingOutlined />}>
        <Link to="/shop">Shop</Link>
      </Item>

      <Item key="cart" icon={<ShoppingCartOutlined />}>
        <Link to="/cart">
          <Badge count={cart.length} offset={[8, 0]}>
            Cart
          </Badge>
        </Link>
      </Item>
    </Menu>
  );
};

export default Header;
