import React, { useState } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebarHandler = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="border-l border-primary-400 bg-secondary-0 py-5 md:py-4 md:row-start-1 md:row-span-2">
      <button className="" onClick={() => openSidebarHandler()}>
        app sidebar
      </button>

      <div className={`${sidebar ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col gap-3 p-2">
          <li>
            <CustomNavlink to="/owner/dashboard">
              <HiHome />
              <span>داشبورد</span>
            </CustomNavlink>
          </li>
          <li>
            <CustomNavlink to="/owner/projects">
              <HiCollection />
              <span>پروژه</span>
            </CustomNavlink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

function CustomNavlink({ children,to }) {
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50  hover:text-primary-900  px-2  py-1.5 rounded-lg  transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${navlinkClass} bg-primary-100/50 text-primary-900`
          : `${navlinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
