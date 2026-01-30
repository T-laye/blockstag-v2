import { create } from "zustand";
import Cookies from "js-cookie";
import { IUser } from "../types/userType";
import { queryClient } from "../providers/ReactQueryProvider";

type AuthState = {
  credentials: {
    access_token: string;
    user: IUser | null;
  } | null;
  isInitialized: boolean;
  setCredentials: (access_token: string, user: IUser) => void;
  logout: () => void;
  initializeAuth: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  credentials: null,
  isInitialized: false,

  setCredentials: (access_token, user) => {
    Cookies.set("access_token", access_token, {
      expires: 1,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
      path: "/",
    });

    set({ credentials: { access_token, user }, isInitialized: true });
  },

  logout: () => {
    Cookies.remove("access_token");
    queryClient.clear();
    set({ credentials: null, isInitialized: true });
  },

  initializeAuth: () => {
    const access_token = Cookies.get("access_token");

    if (access_token) {
      set({
        credentials: { access_token, user: null },
        isInitialized: true,
      });
    } else {
      set({ credentials: null, isInitialized: true });
    }
  },
}));

// 👇 Create a separate hook for the logout function specifically
export const useLogout = () => useAuthStore((state) => state.logout);
