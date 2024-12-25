import React from 'react';
import logo from '../images/TRUST2.jpg'; // Adjust the path to your logo image
import { Home, Info, Phone } from 'lucide-react';
import sportsIcon from '../images/icon/sports.webp'; // Import the sports icon
import albumIcon from '../images/icon/album.webp'; // Import the album icon

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white p-4">
      <div className="flex flex-col space-y-6 h-full">
        <div className="text-2xl font-bold pb-6 border-b border-gray-600">
          <img src={logo} alt="Logo" className="logo" />
          <p className="text-lg font-semibold text-center mt-4">
            TAMIL REPATRIATES UNITED SEVA TRUST
          </p>
        </div>
        
        <nav className="flex flex-col space-y-4 overflow-y-auto hide-scrollbar">
          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Home size={20} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <i className="ri-hospital-line"></i>
            <span>Medical</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <img src={sportsIcon} alt="Sports Icon" className="icon-size" />
            <span>Sports</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <img src={albumIcon} alt="Album Icon" className="icon-size" />
            <span>Album</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Info size={20} />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Phone size={20} />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;