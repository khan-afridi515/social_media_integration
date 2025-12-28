import React, { useRef, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const myRef = useRef();
  const myTimes = useRef();

  const showBar = () => {
    setShowSidebar(true);
    myRef.current.style.display = "none";
    myTimes.current.style.display = "block";
  };

  const turnBar = () => {
    setShowSidebar(false);
    myRef.current.style.display = "block";
    myTimes.current.style.display = "none";
  };

  return (
    <div className="w-full relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Navbar />
      </div>

      <div className="relative w-full flex h-screen">
        {/* Sidebar */}
        <div
          className={
            showSidebar
              ? "absolute top-16 fixed h-full z-50 block left-0 md:w-[22%] sm:w-[32%] w-[53%] bg-white"
              : "absolute top-16 fixed h-full md:block hidden left-0 w-[20%]"
          }
        >
          <Sidebar />
          <div
            className={showSidebar ? "absolute top-2 right-4 text-2xl block" : "hidden"}
            onClick={turnBar}
          >
            <i className="fa-solid fa-times"></i>
          </div>
        </div>

        {/* Page Content */}
        <div className="absolute top-16 md:left-[22%] left-0 h-full md:w-[78%] w-full">
          <Outlet />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="absolute top-5 fixed left-4 md:hidden block z-50"
        ref={myRef}
        onClick={showBar}
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </div>
    </div>
  );
};

export default MainLayout;
