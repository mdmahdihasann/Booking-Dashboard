import React from "react";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen p-4 bg-[#348F6C]">
      <SideBar />
      <main className="flex-1 p-6 overflow-auto bg-white rounded-lg"></main>
    </div>
  );
};

export default Dashboard;
