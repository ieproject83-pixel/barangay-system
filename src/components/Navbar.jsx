import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';
import { Calendar, FileText, LayoutDashboard, LogOut, Users, Shield } from 'lucide-react';

function Navbar({ user, isAdmin }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  if (!user) {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Barangay Del Pilar
          </Link>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>
    );
  }

  // Admin Navigation - Separate Dashboard and Admin Dashboard
  if (isAdmin) {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/admin" style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            🏛️ Barangay Del Pilar
          </Link>
          <div className="nav-links">
            <Link to="/dashboard">
              <LayoutDashboard size={18} style={{ display: 'inline', marginRight: '6px' }} />
              Dashboard
            </Link>
            <Link to="/admin">
              <Shield size={18} style={{ display: 'inline', marginRight: '6px' }} />
              Admin Dashboard
            </Link>
            <Link to="/queue">
              <Users size={18} style={{ display: 'inline', marginRight: '6px' }} />
              Queue Status
            </Link>
            <button onClick={handleLogout} className="btn btn-danger" style={{ padding: '8px 20px' }}>
              <LogOut size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // User Navigation
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/dashboard" style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          🏠 Barangay Del Pilar
        </Link>
        <div className="nav-links">
          <Link to="/dashboard">
            <LayoutDashboard size={16} style={{ display: 'inline', marginRight: '6px' }} />
            Dashboard
          </Link>
          <Link to="/book">
            <Calendar size={16} style={{ display: 'inline', marginRight: '6px' }} />
            Book
          </Link>
          <Link to="/appointments">
            <FileText size={16} style={{ display: 'inline', marginRight: '6px' }} />
            My Appointments
          </Link>
          <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '8px 20px' }}>
            <LogOut size={16} style={{ display: 'inline', marginRight: '6px' }} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;