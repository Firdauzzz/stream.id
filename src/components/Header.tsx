import React from "react";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-4 py-2 border-b">
    <img src="/streem.png" alt="Streem Logo" className="w-8 h-8 object-contain" />
    <div className="font-bold text-lg text-gray-500">Streem</div>
    <div className="flex gap-4">
      <a href="#" className="text-blue-600 font-semibold">For you</a>
      <a href="#" className="text-gray-600 font-semibold">Following</a>
    </div>
  </header>
);

export default Header;
