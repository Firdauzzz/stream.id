import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faBell } from '@fortawesome/free-solid-svg-icons';

const iconClass = "text-gray-600 w-5 h-5";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex z-10 p-4 pt-6 md:pt-2 text-base w-64 min-h-screen border-r border-gray-200 bg-white flex flex-col">
      <nav className="flex flex-col gap-6 md:gap-4">
        <a href="#" className="flex items-center gap-3 font-semibold text-gray-700">
          <FontAwesomeIcon icon={faHome} className={iconClass} /> Home
        </a>
        <a href="#" className="flex items-center gap-3 font-semibold text-gray-700">
          <FontAwesomeIcon icon={faHashtag} className={iconClass} /> Explore
        </a>
        <a href="#" className="flex items-center gap-3 font-semibold text-gray-700">
          <FontAwesomeIcon icon={faBell} className={iconClass} /> Notifications
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
