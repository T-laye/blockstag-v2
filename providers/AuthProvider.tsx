/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuthStore, useLogout } from "../stores/userAuthStore";
import { pageRoutes } from "../lib/routes";
import { useGetUser } from "../hooks/useUser";
import PageLoading from "../components/shared/PageLoading";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const logout = useLogout();
  const setCredentials = useAuthStore((state) => state.setCredentials);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeAuth();
    setIsInitialized(true);
  }, []);

  const accessToken = Cookies.get("access_token");

//   console.log("access from provider", accessToken);

  const {
    isLoading: isUserLoading,
    isError: isUserError,
    data,
  } = useGetUser(isInitialized && !!accessToken);

//   console.log("user data", data);

  // Handle logout scenarios
  useEffect(() => {
    if (!isInitialized) return;

    if (!accessToken || isUserError) {
      logout();
      router.replace(pageRoutes.authRoutes.SIGN_IN);
    }
  }, [isInitialized, accessToken, isUserError]);

  // Set credentials when user data is fetched
  useEffect(() => {
    if (isInitialized && accessToken && data) {
      setCredentials(accessToken, data);
    }
  }, [data, accessToken, isInitialized]);

  // Optional: Show loading state
  if (!isInitialized || (accessToken && isUserLoading)) {
    return <PageLoading />;
  }

  return <>{children}</>;
}
