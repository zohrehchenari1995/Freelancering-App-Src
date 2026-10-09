import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({onSubmit,phoneNumber,onChange,isSendingOtp }) {
  // save get phonenumber in usestate hook....(lift to parent-component(Authcontainer.jsx))



  return (
    <div className="container xl:max-w-screen-xl mt-10">
      <form className="space-y-8" onSubmit={onSubmit}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChange}
        />

        {isSendingOtp ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
