import React from "react";
// Pastikan sudah install font-awesome: npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faBell } from '@fortawesome/free-solid-svg-icons';

const iconClass = "text-gray-500 w-5 h-5";

const Sidebar: React.FC = () => (
  <aside className="w-32 p-2 text-gray-600 text-sm">
    <nav className="flex flex-col gap-4">
      <a href="#" className="flex items-center gap-2 hover:underline">
        <FontAwesomeIcon icon={faHome} className={iconClass} /> Home
      </a>
      <a href="#" className="flex items-center gap-2 hover:underline">
        <FontAwesomeIcon icon={faHashtag} className={iconClass} /> Explore
      </a>
      <a href="#" className="flex items-center gap-2 hover:underline">
        <FontAwesomeIcon icon={faBell} className={iconClass} /> Notifications
      </a>
    </nav>
  </aside>
);

export default Sidebar;
