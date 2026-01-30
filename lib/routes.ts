// PAGE ROUTES
export const pageRoutes = {
  authRoutes: {
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    VERIFY_OTP: (email: string) => `/auth/verify-otp?email=${email}`,
    UPDATE_PROFILE: "/auth/update-profile",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  dashboardRoutes: {
    OVERVIEW: "/overview",
  },
};

export const backendRoutes = {
  authRoutes: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    VERIFY_EMAIL: "/auth/verify-email",
  },
};
