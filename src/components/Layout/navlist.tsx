import React from 'react';
import NavItem from "./navItem";
import {navItems} from "../../assets/data";

interface IProps {
}

function NavList(props: IProps) {
  return (
    <ul className="grid gap-1">
      {
        navItems.map((navItem, index) => (
          <NavItem key={`navItem-${index}`} {...navItem} />
        ))
      }
    </ul>
  );
}

export default NavList;
