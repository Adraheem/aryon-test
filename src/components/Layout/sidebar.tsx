import React from 'react';
import NavList from "./navlist";
import {Link} from "react-router-dom";
import SidebarProfile from "./sidebarProfile";

interface IProps {
}

function Sidebar(props: IProps) {
  return (
    <aside
      className="h-screen fixed left-0 top-0 bottom-0 w-[250px] flex flex-col bg-white border-r border-r-slate-200">
      <div className="p-6">
        <Link to="/">
          <h4 className="leading-none">Aryon</h4>
          <p className="leading-none">Enterprise</p>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <p className="small mb-2">Platform</p>
        <NavList/>
      </div>

      <SidebarProfile/>
    </aside>
  );
}

export default Sidebar;
