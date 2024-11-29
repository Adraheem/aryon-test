import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "../pages/dashboard";
import Layout from "../components/Layout";
import RecommendationsPage from "../pages/recommendations";
import LoginPage from "../pages/login";

interface IProps {
}

function RootNavigation(props: IProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route element={<Layout/>}>
          <Route path="" element={<DashboardPage/>}/>
          <Route path="recommendations" element={<RecommendationsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;
