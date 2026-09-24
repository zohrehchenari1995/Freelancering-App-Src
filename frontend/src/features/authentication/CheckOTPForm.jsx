import React, { useState } from 'react'
import OTPInput from "react-otp-input"

function CheckOTPForm() {
  const[otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-8">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> - </span>}
          renderInput={(props)=><input type="number" {...props}/>}
          containerStyle="flex flex-row-reverse justify-center sm:gap-x-1.5 lg:gap-x-3"
          inputStyle={{
            border:"1px solid rgb(var(--color-primary-800))",
            width:"2.5rem",
            borderRadius:"0.5rem",
            padding:"0.5rem 0.2rem"
          }}
        />

        <button className="btn btn--primary w-full">کد تایید را ارسال کنید</button>
      </form>
    </div>
  )
}

export default CheckOTPForm