import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import Layout from "../components/Layout";
import RecommendationsPage from "../pages/recommendations";
import LoginPage from "../pages/login";
import LogoutPage from "../pages/logout";

interface IProps {
}

function RootNavigation(props: IProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="logout" element={<LogoutPage/>}/>
        <Route element={<Layout/>}>
          <Route path="" element={<DashboardPage/>}/>
          <Route path="recommendations" element={<RecommendationsPage archived={false}/>}/>
          <Route path="recommendations/archive" element={<RecommendationsPage archived={true}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;
