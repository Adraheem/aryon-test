import React from 'react';
import Sidebar from "./sidebar";
import {Outlet} from "react-router-dom";

interface IProps {
}

function Layout(props: IProps) {
  return (
    <div className="grid grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
      <div>
        <Sidebar/>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
