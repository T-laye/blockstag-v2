import { AxiosError } from "axios";
import { backendRoutes } from "../lib/routes";
import { IUser } from "../types/userType";
import useAxiosAuth from "./useAxiosAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (enabled = true) => {
  const { get } = useAxiosAuth();

  const handleGetUser = async (): Promise<IUser> => {
    const response = await get(backendRoutes.userRoutes.GET_USER);

    // console.log("Get user response:", response);

    // Extract user data from response - adjust based on your actual response structure
    const userData = response.data?.data || response.data;

    if (!userData) {
      throw new Error("User data is missing");
    }

    return userData;
  };

  const query = useQuery<IUser, AxiosError>({
    queryKey: ["user"],
    queryFn: handleGetUser,
    enabled,
    retry: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  });

  return query;
};
