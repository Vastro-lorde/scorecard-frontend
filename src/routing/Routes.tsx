import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/LoginPage';
import ForgotPassword from '../pages/ForgotPasswordPage';
import ResetPassword from '../pages/ResetPassword';
import HomePage from '../pages/HomePage';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/ResetPassword' element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default Routers;
