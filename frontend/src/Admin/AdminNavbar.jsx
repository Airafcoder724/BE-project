import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/footer_logo.jpeg";
import { useAuthStore } from "../store/authStore";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out 
          md:translate-x-0 z-50`}
      >
        <div className="flex items-center justify-center p-4 border-b border-gray-700">
          <img src={logoImage} alt="Logo" className="h-16 w-16" />
        </div>
        <ul className="mt-4 space-y-4">
          <li>
            <Link
              to="/admin/create-event"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Create Event
            </Link>
          </li>
          <li>
            <Link
              to="/admin/edit-events"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Manage Events
            </Link>
          </li>
          <li>
            <Link
              to="/admin/assign-rewards"
              className="block py-2 px-4 hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Assign Rewards
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-4 w-full px-4">
          {isAuthenticated && (
            <button
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded bg-gray-900 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default AdminNavbar;
