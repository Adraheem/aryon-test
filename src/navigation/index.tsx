import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const DashboardPage = React.lazy(() => import('../pages/dashboard'));
const Layout = React.lazy(() => import('../components/Layout'));
const RecommendationsPage = React.lazy(() => import('../pages/recommendations'));
const LoginPage = React.lazy(() => import('../pages/login'));
const LogoutPage = React.lazy(() => import('../pages/logout'));

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
