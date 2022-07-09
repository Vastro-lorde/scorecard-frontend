import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPassword';
import HomePage from '../pages/HomePage';
import SkillEvaluationPage from '../pages/SkillEvaluationPage';
import OverviewPage from '../pages/OverviewPage';
import DashboardPage from '../pages/DashboardPage';
import PerformancePage from '../pages/PerformancePage';
import ProfileSettingsPage from '../pages/ProfileSettingsPage';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
        <Route path='/ResetPassword' element={<ResetPasswordPage />} />
        <Route path='/skillEvaluation' element={<SkillEvaluationPage />} />
        <Route path='/PerformanceReport' element={<PerformancePage />} />
        <Route path='/Dashboard/Overview' element={<OverviewPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/profileSettings' element={<ProfileSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
