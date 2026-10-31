import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid  md:h-screen md:grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />

      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
