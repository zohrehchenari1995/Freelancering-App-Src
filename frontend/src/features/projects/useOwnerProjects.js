import { getOwnerProjectsApi } from "../../services/projectService";
import {useQuery} from "@tanstack/react-query";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey:["projects"],
    queryFn: getOwnerProjectsApi,
  });
 
 return {
    isLoading,
     projects: data?.data?.projects ?? [],
  };
}

