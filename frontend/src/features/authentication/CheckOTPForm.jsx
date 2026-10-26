import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  // state for handle otpform and checkotp form....
  const [otp, setOtp] = useState("");
  // satate for navigate with all role(owner,freelancer and dont have role).....
  const navigate = useNavigate();
  // for create timer in check-otp-form....
  const [time, setTime] = useState(RESEND_TIME);

  // for mutate checkotp......
  const { isPending,  mutateAsync } = useMutation({
    // mutationFn: checkOtp,
     mutationFn: async ({ phoneNumber,otp }) => {
          const startTime = Date.now();
    
          const data = await checkOtp({phoneNumber,otp });
          const defTime = Date.now() - startTime;
          const remaindTime = Math.max(0, 500 - defTime);
    
          await new Promise((resolve) => {
            return setTimeout(resolve, remaindTime);
          });
          return data;
        },
  });

  // eventhandler for click on all form(input and button).....
  const checkOtpHandler = async (e) => {
    e.preventDefault();
        console.log("Phone number:", phoneNumber);
    try {
  
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      // check isActive user....
      if (!user.isActive || !user.name || !user.email){
       return navigate("/complete-profile");
      
      }
      if(user.status !== 2){
        navigate("/");
        toast("پروفایل شما در انتطار تایید است", {icon: '👏'});
        return;
      } 

      if (user.isActive) {
        // if(user.role=== "OWNER") navigate("/owner");
        // if(user.role === "FREELANCER") navigate("/freelancer");
      } 
    } catch (error) {
      // toast.error(error?.response?.data?.message);
      console.log("Full error:", error);
  console.log("Response data:", error?.response?.data);
  console.log("Error message:", error?.message);

  toast.error(
    error?.response?.data?.message ||
    error?.message ||
    "خطایی رخ داده است"
  );
    }
  };

  // for handle timer....
  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        return setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>

      {/* for edit otpcode... */}
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          
          <span>{otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900"/>
          </button>
        </p>
      )}

      {/* show timer.... */}
      <div className="mt-2 mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد</button>
        )}
      </div>

      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> - </span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse justify-center sm:gap-x-1.5 lg:gap-x-3"
          inputStyle={{
            border: "1px solid rgb(var(--color-primary-800))",
            width: "2.5rem",
            borderRadius: "0.5rem",
            padding: "0.5rem 0.2rem",
          }}
        />

        {isPending ? (
          <Loading />
        ) : (
          <button className="btn btn--primary w-full" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOTPForm;
