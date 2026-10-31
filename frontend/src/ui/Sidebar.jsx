import React, { useState } from "react";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebarHandler = () => {
    setSidebar((prev) => !prev);
    console.log("true");
  };
  return (
    <div className="border-l border-primary-400 bg-secondary-0  md:row-start-1 md:row-span-2">
      <span
        className={`${sidebar ? "w-60" : "w-28"}`}
        onClick={() => openSidebarHandler()}
      >
        <span className="">app sidebar</span>
      </span>

      {sidebar && (
        <div className="flex flex-col p-1">
          <span className="">1</span>
          <span className="">2</span>
          <span className="">3</span>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
