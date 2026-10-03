import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ setStep }) {
  // save get phonenumber in usestate hook....
  const [phoneNumber, setPhoneNumber] = useState("");

  // use reactQuery for handle request...
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  // eventhaqndler...
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);

      toast.success(data.message);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  return (
    <div className="container xl:max-w-screen-xl mt-10">
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        {isPending ? (
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
