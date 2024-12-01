import React, {useEffect} from 'react';
import useAuthContext from "../../context/authContext/hook";
import {useNavigate} from "react-router-dom";
import utils from "../../utils";

interface IProps {
}

function LogoutPage(props: IProps) {
  const {logout} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      logout();
      await utils.wait(300);
      navigate("/login", {replace: true})
    })();
  }, [logout, navigate]);

  return (
    <div className="h-screen w-full flex items-center justify-center text-center">
      <p>Logging out...</p>
    </div>
  );
}

export default LogoutPage;
