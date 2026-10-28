import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebarHandler = () => {
    setSidebar((prev) => !prev);
    console.log("true");
    
  };

  return (
    <div className="grid  md:h-screen md:grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]">
      <div className="bg-secondary-0 py-4 md:py-4 md:px-8">App headder</div>


      <div className= " bg-secondary-0  md:row-start-1 md:row-span-2">
        <span
         className={`${sidebar ?"w-60" :"w-28"}`}
           onClick={() => openSidebarHandler()}>
            <span className="">app sidebar</span>
            </span>
       
        {sidebar &&(
          <div className="flex flex-col p-1">
            <span className="">1</span>
            <span className="">2</span>
            <span className="">3</span>
          </div>
        )
          
        }
          
     


      </div>

      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
