import React from "react";

const TabsNav: React.FC = () => (
  <nav className="flex border-b bg-white sticky top-[56px] z-10">
    <button className="flex-1 py-3 font-bold border-b-4 border-black text-black text-base transition-colors">For you</button>
    <button className="flex-1 py-3 font-semibold text-gray-500 text-base border-b-4 border-transparent transition-colors">Following</button>
  </nav>
);

export default TabsNav;
