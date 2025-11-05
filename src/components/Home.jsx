import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="flex h-screen p-4 bg-[#348F6C]">
      <SideBar />
      <main className="flex-1 p-6 overflow-auto bg-white rounded-lg ">
        <Outlet/>
      </main>
    </div>
  );
}; 

export default Home;
