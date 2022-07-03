import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPassword';
import HomePage from '../pages/HomePage';
import OverviewPage from '../pages/OverviewPage';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
        <Route path='/ResetPassword' element={<ResetPasswordPage />} />
        <Route path='/Dashboard/Overview' element={<OverviewPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
