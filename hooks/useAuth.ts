import { useRouter } from "next/navigation";
import { axiosInstance } from "../config/axios";
import { backendRoutes, pageRoutes } from "../lib/routes";
import { ILoginResponse, IRegisterResponse, IUser } from "../types/userType";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const useRegister = () => {
  const router = useRouter();

  // Define the function to handle the registration API call
  const handleRegister = async (data: IUser) => {
    const response = await axiosInstance.post(
      backendRoutes.authRoutes.REGISTER,
      {
        username: data.username,
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      },
    );
    return response.data;
  };

  // Use React Query's useMutation hook with additional configurations
  const mutation = useMutation<
    IRegisterResponse,
    AxiosError<IRegisterResponse>,
    IUser
  >({
    mutationFn: handleRegister,
    onSuccess: (data: IRegisterResponse) => {
      //   const access_token = data.data.access_token;
      //   const user = data.data.user;
      //   sessionStorage.setItem("access_token", access_token);
      //   sessionStorage.setItem("user", JSON.stringify(user));
      //   console.log(data);

      toast.success(data.message);
      router.push(`${pageRoutes.authRoutes.VERIFY_OTP(data.user.email || "")}`);
    },
    onError: (error) => {
      const errorMessage =
        axios.isAxiosError(error) && error?.response?.data?.message
          ? error?.response?.data?.message
          : "An unknown error occurred.";
      toast.error(errorMessage);
      //   console.log(error?.response?.data);
    },
  });

  // Return the mutation object to use in components
  return mutation;
};

export const useLogin = () => {
  const router = useRouter();

  // Define the function to handle the registration API call
  const handleLogin = async (data: IUser) => {
    const response = await axiosInstance.post(backendRoutes.authRoutes.LOGIN, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  };

  // Use React Query's useMutation hook with additional configurations
  const mutation = useMutation<
    ILoginResponse,
    AxiosError<ILoginResponse>,
    IUser
  >({
    mutationFn: handleLogin,
    onSuccess: (data: ILoginResponse) => {
      const access_token = data.token;
      sessionStorage.setItem("access_token", access_token);
    //   console.log(data);

      toast.success(data.message);
      router.push(`${pageRoutes.dashboardRoutes.OVERVIEW}`);
    },
    onError: (error) => {
      const errorMessage =
        axios.isAxiosError(error) && error?.response?.data?.message
          ? error?.response?.data?.message
          : "An unknown error occurred.";
      toast.error(errorMessage);
      //   console.log(error?.response?.data);
    },
  });

  // Return the mutation object to use in components
  return mutation;
};

export const useVerifyEmail = () => {
  const router = useRouter();

  // Define the function to handle the registration API call
  const handleVerifyEmail = async (data: IUser) => {
    const response = await axiosInstance.post(
      backendRoutes.authRoutes.VERIFY_EMAIL,
      {
        email: data.email,
        code: data.otp,
      },
    );
    return response.data;
  };

  // Use React Query's useMutation hook with additional configurations
  const mutation = useMutation<
    IRegisterResponse,
    AxiosError<IRegisterResponse>,
    IUser
  >({
    mutationFn: handleVerifyEmail,
    onSuccess: (data: IRegisterResponse) => {
      toast.success(data.message);
      router.push(`${pageRoutes.authRoutes.SIGN_IN}`);
    },
    onError: (error) => {
      const errorMessage =
        axios.isAxiosError(error) && error?.response?.data?.message
          ? error?.response?.data?.message
          : "An unknown error occurred.";
      toast.error(errorMessage);
      //   console.log(error?.response?.data);
    },
  });

  // Return the mutation object to use in components
  return mutation;
};
