import React, {  useState } from "react";

function SendOTPForm() {
  // save get phonenumber in hook....
  const[phoneNumber,setPhoneNumber] = useState("");

  return (
    <div className="container xl:max-w-screen-xl mt-10">
      <form className="space-y-8">
        <div>
          <label
            htmlFor="phonenumber"
            className="block font-bold sm:text-sm md:text-base lg:text-lg mb-2 xl:text-xl"
          >
            شماره موبایل
          </label>
          <input
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            id="phonenumber"
            type="number"
            className="textFeild__input w-full"
          />
        </div>
        <button 
        className="btn btn--primary w-full">
        ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;

