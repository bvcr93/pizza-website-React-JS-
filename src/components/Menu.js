import React from "react";
import "./Menu.css";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">our menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
            key={key}
              price={menuItem.price}
              image={menuItem.image}
              name={menuItem.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
