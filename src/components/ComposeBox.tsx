import React from "react";

const ComposeBox: React.FC = () => (
  <div className="border-b p-3">
    <input
      type="text"
      placeholder="What's happening?"
      className="w-full border px-2 py-1 rounded mb-2 placeholder-gray-300 text-gray-900"
      
    />
    <div className="flex gap-2 mb-2">
      <span>🖼️</span>
      <span>🎬</span>
      <span>📊</span>
      <span>😊</span>
      <span>📅</span>
      <span>📍</span>
    </div>
    <button className="bg-blue-500 text-white px-4 py-1 rounded float-right" disabled>
      Post
    </button>
  </div>
);

export default ComposeBox;
