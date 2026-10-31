import http from "./httpService";

// authService for get-otp...(data:phonenumber)
export function getOtp(data) {
  return http.post("user/get-otp", data).then(({ data }) => {
   return data.data;
  });
}

// authService for check-otp...(data:verify-code)
export function checkOtp(data) {
  return http.post("user/check-otp", data).then(({data})=>{
    return data.data;
  });
}

// complite-profile for send info...(anme,email,role)
export function CompleteProfile(data){
  return http.post("/user/complete-profile",data).then(({data})=>{
      return data.data;
  })
}

// get user information for header(owner)...
export function getUser(){
  return http.get("user/profile").then(({data})=>{
    return data.data;
  })
}