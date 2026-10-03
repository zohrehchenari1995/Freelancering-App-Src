import http from "./httpService";

// authService for get-otp...(data:phonenumber)
export function getOtp(data) {
  return http.post("user/get-otp", data).then(({ data }) => {
   return data.data;
  });
}

// authService for check-otp...(data:verify-code)
export function checkOtp(data) {
  return http.post("user/check-otp", data);
}
