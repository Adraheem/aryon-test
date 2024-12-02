import React, {useEffect, useState} from 'react';
import Sidebar from "./sidebar";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import useAuthContext from "../../context/authContext/hook";
import {Icon} from "@iconify/react";
import Button from "../Button";

interface IProps {
}

function Layout(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated} = useAuthContext();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", {replace: true});
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="grid lg:grid-cols-[minmax(0,250px)_minmax(0,1fr)]">
      <div>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
      <main>
        <div className="lg:hidden inline-flex py-5">
          <Button
            variant="GHOST"
            onClick={() => setIsOpen(true)}
          >
            <Icon icon="proicons:menu" width={24} height={24}/>
          </Button>
        </div>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
