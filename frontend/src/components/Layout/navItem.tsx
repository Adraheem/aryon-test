import {Icon} from '@iconify/react';
import React, {useMemo} from 'react';
import {Link, useLocation} from "react-router-dom";
import {INavItem} from "../../types";

interface IProps extends INavItem {
  active?: boolean;
}

function NavItem({title, href = "#", icon, onClick}: IProps) {
  const {pathname} = useLocation();

  const active = useMemo(() => pathname === href || (href !== "/" && pathname.startsWith(href)),
    [pathname, href]);

  return (
    <li>
      <Link
        to={href}
        onClick={(e) => {
          if (!!onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className={`flex gap-2 items-center p-2 rounded-md ${active ?
          "bg-primary-100 text-primary" :
          "text-slate-600 hover:bg-primary-100 hover:text-primary"}`}
      >
        <Icon icon={icon} width={22} height={22}/>
        <p>{title}</p>
      </Link>
    </li>
  )
    ;
}

export default NavItem;
