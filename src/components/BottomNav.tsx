import React from "react";

const BottomNav: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-10">
    <button className="flex flex-col items-center text-blue-500"><span>🏠</span></button>
    <button className="flex flex-col items-center"><span>🔍</span></button>
    <button className="flex flex-col items-center"><span>🔔</span></button>
    <button className="flex flex-col items-center"><span>✉️</span></button>
    <button className="flex flex-col items-center"><span>👤</span></button>
  </nav>
);

export default BottomNav;
