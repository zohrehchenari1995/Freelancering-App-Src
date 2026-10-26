import React, { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CompleteProfile } from "../../services/authService";
import {useNavigate} from "react-router-dom";
import Loading from "../../ui/Loading";

function CompleteProfileForm({ onSubmit, label }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  
  // send request to backend...
  const {isPending,mutateAsync} = useMutation({
    mutationFn: async({name,email,role})=>{
      const startTime = Date.now();
      
      const data =await CompleteProfile({name,email,role})
      const difTime = Date.now() - startTime;
      console.log(data);
      const remaindTime = Math.max(0, 500 - difTime);

       await new Promise((resolve) => {
            return setTimeout(resolve, remaindTime);
          });
          return data;
        },
    
  })

  // send info form to backend....
  const handelSubmit = async(e)=>{
      e.preventDefault();
      console.log({ name, email, role });
      try{
        const {user,message} = await mutateAsync({name,email,role})
        console.log(user,message);
        toast.success(message);

         // check isActive user....
      if(user.status !== 2){
        navigate("/");
        toast("پروفایل شما در انتطار تایید است", {icon: '👏'});
        return;
      } 

      if (user.isActive) {
        // if(user.role=== "OWNER") navigate("/owner");
        // if(user.role === "FREELANCER") navigate("/freelancer");
      } 
      }
      catch(error){
        toast.error(error?.response?.data?.message);
      }
  }

  return (
    <div className="flex justify-center pt-10">
      <div className="container sm:max-w-screen-sm">
        <form className="space-y-8" onSubmit={handelSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="ایمیل"
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex justify-center items-center gap-x-8">
            <RadioInput
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              label="فریلنسر"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
            <RadioInput
              name="role"
              id="OWNER"
              value="OWNER"
              label="کارفرما"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
          </div>

          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید اطلاعات
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
