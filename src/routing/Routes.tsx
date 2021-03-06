import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import ResetPasswordPage from '../pages/ResetPassword';
import HomePage from '../pages/HomePage';
import SkillEvaluationPage from '../pages/SkillEvaluationPage';
import OverviewPage from '../pages/OverviewPage';
import PerformancePage from '../pages/PerformancePage';
import TestPage from '../pages/TestPage';
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
        <Route path='/Dashboard/PerformanceReport' element={<PerformancePage />} />
        <Route path='/Dashboard/Overview' element={<OverviewPage />} />
        <Route path='/dashboard/profileSettings' element={<ProfileSettingsPage />} />
        <Route path='/dashboard/TestPage' element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default Routers;
