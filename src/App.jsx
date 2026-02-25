import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Placeholder from './pages/Placeholder';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Protected Routes Wrapper */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Placeholder title="Student Management" />} />
            <Route path="/courses" element={<Placeholder title="Course Management" />} />
            <Route path="/enrollment" element={<Placeholder title="Enrollment Process" />} />
            <Route path="/reports" element={<Placeholder title="System Reports" />} />
            <Route path="/settings" element={<Placeholder title="System Settings" />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
