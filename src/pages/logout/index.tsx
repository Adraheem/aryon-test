import React, {useEffect} from 'react';
import useAuthContext from "../../context/authContext/hook";
import {useNavigate} from "react-router-dom";

interface IProps {
}

function LogoutPage(props: IProps) {
  const {logout} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login", {replace: true})
  }, [logout, navigate]);

  return (
    <></>
  );
}

export default LogoutPage;
