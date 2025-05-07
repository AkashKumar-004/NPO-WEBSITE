import React from 'react';
import { Users, Book, Home, Utensils, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/UserSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (path) => {
    navigate(`${path.toLowerCase()}`);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="w-full h-full bg-gray-900 text-white p-5 space-y-5">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <SidebarItem label="Users" icon={<Users />} onClick={() => handleNavigation('/userList')} />
      <SidebarItem label="Education" icon={<Book />} onClick={() => handleNavigation('/educationdetail')} />
      <SidebarItem label="Shelter" icon={<Home />} onClick={() => handleNavigation('/shelterdetail')} />
      <SidebarItem label="Food" icon={<Utensils />} onClick={() => handleNavigation('/fooddetail')} />
      <SidebarItem label="Queries" icon={<HelpCircle />} onClick={() => handleNavigation('/querydetail')} />

      <button
        onClick={handleLogout}
        className="flex items-center space-x-2 text-red-400 hover:text-red-600 mt-10"
      >
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

const SidebarItem = ({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-3 hover:bg-gray-700 p-2 w-full text-left rounded-md"
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default Dashboard;
