import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ComposeBox from "./ComposeBox";
import Feed from "./Feed";

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-white">
    <Sidebar />
    <div className="flex-1 max-w-2xl mx-auto border-x border-gray-200 min-h-screen flex flex-col">
      <Header />
      <ComposeBox />
      <Feed />
      {children}
    </div>
  </div>
);

export default AppLayout;
