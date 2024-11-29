import React, {useMemo} from 'react';
import {Link, useLocation} from "react-router-dom";
import {Icon} from "@iconify/react";
import {INavItem} from "../../types/common.types";

interface IProps extends INavItem {
  active?: boolean;
}

function NavItem({title, href, icon}: IProps) {
  const {pathname} = useLocation();

  const active = useMemo(() => pathname === href || pathname.startsWith(href), [pathname]);

  return (
    <li>
      <Link
        to={href}
        className={`flex gap-2 items-center p-2 rounded-md ${active ?
          "bg-primary-100 text-primary" :
          "text-slate-600 hover:bg-primary-100 hover:text-primary"}`}
      >
        <Icon icon={icon} width={22} height={22}/>
        <p>{title}</p>
      </Link>
    </li>
  );
}

export default NavItem;
