import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/UserSlice';
import { Menu, X } from 'lucide-react';
import Dashboard from './Adminnav';

const Navbar = () => {
  const { token, isAdmin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); 
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <nav className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-extrabold flex tracking-wide text-white">
            {isAdmin && <button onClick={toggleSidebar} className="text-white">
              <Menu/>
            </button>
            }
            <Link to="/" className="hover:text-gray-300 transition duration-300 px-7">HOME</Link>
          </div>
          <div className="hidden md:flex space-x-8 font-bold text-xl">
            <Link to="/services" className="hover:text-gray-300 transition duration-300">Services</Link>
            <Link to="/about" className="hover:text-gray-300 transition duration-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 transition duration-300">Contact Us</Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="hover:text-red-400 transition duration-300 text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="hover:text-gray-300 transition duration-300">Login</Link>
            )}
          </div>
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        <div className="overflow-y-auto h-screen">
        <div className="flex justify-end p-4 text-black">
          <button onClick={toggleSidebar}>
            <X/>
          </button>
        </div>
           <Dashboard />
        </div>
      </div>
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30 z-40"
        />
      )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
