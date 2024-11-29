import React, {useEffect} from 'react';
import Sidebar from "./sidebar";
import {Outlet, useNavigate} from "react-router-dom";
import useAuthContext from "../../context/authContext/hook";

interface IProps {
}

function Layout(props: IProps) {
  const {isAuthenticated} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {replace: true});
    }
  }, [isAuthenticated, navigate]);

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
