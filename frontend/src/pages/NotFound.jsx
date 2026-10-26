import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useMoveBack } from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="cotainer mx-auto sm:max-w-screen-sm flex items-center justify-center pt-10 flex-col">
      <h1 className="text-xl font-bold text-secondary-700 mb-6">
        صفحه ای که دنبالش بودید پیدا نشد
      </h1>
      <div>
         <button onClick={moveBack} className="flex items-center gap-x-5 ">
        <HiArrowRight  className="w-6 h-6 text-primary-900"/>
        <span>برگشت</span>
      </button>
      </div>
    </div>
  );
}

export default NotFound;
