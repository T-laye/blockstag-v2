"use client";

import { axiosAuth } from "@/config/axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function useAxiosAuth() {
  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        // 👇 Read token on EACH request, not just on mount
        const accessToken = Cookies.get("access_token");
        console.log("access token", accessToken);
        if (accessToken && !config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
    };
  }, []); // Empty dependency array is fine now

  return axiosAuth;
}
