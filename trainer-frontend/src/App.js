// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterTrainer from './pages/RegisterTrainer';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import ProjectRequest from './pages/ProjectRequest';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-request" element={<ProjectRequest />} />
        <Route path="/register" element={<RegisterTrainer />} />
        <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <AdminLogin setIsAdmin={setIsAdmin} />} />
        <Route path="/admin-login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
}

export default App;
