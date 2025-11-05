import React from "react";
import { Links, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-[200px] bg-[#348F6C] text-white flex flex-col">
      <div className="text-2xl font-bold border-b pb-4 border-gray-400">
        Launch Booking
      </div>
      <nav className="flex-1 pt-4 ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `block px-4 py-3 rounded-tl-full rounded-bl-full  ${
              isPending ? "pending" : isActive ? "active" : ""
            }`
          }
        >
          
          Dashboard
        </NavLink>

        <a
          href="/profile"
          className="block px-4 py-3 rounded-tl-full rounded-bl-full"
        >
          Profile
        </a>
        <a
          href="/settings"
          className="block px-4 py-3 rounded-tl-full rounded-bl-full"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
