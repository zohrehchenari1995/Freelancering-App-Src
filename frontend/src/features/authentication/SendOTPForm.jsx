import React, {  useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  // save get phonenumber in hook....
  const[phoneNumber,setPhoneNumber] = useState("");

  return (
    <div className="container xl:max-w-screen-xl mt-10">
      <form className="space-y-8">
       <TextField 
        label="شماره موبایل"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
       />
        <button 
        className="btn btn--primary w-full">
        ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOTPForm;

