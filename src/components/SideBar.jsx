import React from "react";

const SideBar = () => {
  return (
    <aside className="w-64 bg-[#348F6C] text-white flex flex-col pr-[20px]">
      <div className="text-2xl font-bold border-b pb-4 border-gray-400">
        Launch Booking
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <a
          href="/dashboard"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          Dashboard
        </a>
        <a
          href="/profile"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          Profile
        </a>
        <a
          href="/settings"
          className="block px-3 py-2 rounded hover:bg-gray-700"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
