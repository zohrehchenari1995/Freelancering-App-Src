import http from "./httpService";

export function getOwnerProjectsApi(){
  return http.get("/project/owner-projects").
  then((data)=>{
 return data.data;
  })
}