import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
  // use customhook for link getuser and reactQuery....
  const {data}= useUser();
  console.log(data);
  return (
    <div>
      <div className="border-b border-primary-400 bg-secondary-0 py-4 md:py-4 md:px-8">App headder</div>
    </div>
  );
}

export default Header;
