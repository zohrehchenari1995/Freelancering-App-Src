import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  // use reactQuery for handle request and delay in change setSetep...
  const { isPending: isSendingOtp, mutateAsync,data: otpResponse} = useMutation({
    mutationFn: async ({ phoneNumber }) => {
      const startTime = Date.now();

      const data = await getOtp({ phoneNumber });
      const defTime = Date.now() - startTime;
      const remaindTime = Math.max(0, 500 - defTime);

      await new Promise((resolve) => {
        return setTimeout(resolve, remaindTime);
      });
      return data;
    },
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
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("09179506730");

  const renderStep = () => {
    switch (step) {
      case 1: {
        return (
          <SendOTPForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            onSubmit={sendOtpHandler}
            isSendingOtp={isSendingOtp}
          />
        );
      }
      case 2: {
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      }
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-screen-sm">{renderStep()}</div>;
}

export default AuthContainer;
