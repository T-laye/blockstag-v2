// PAGE ROUTES
export const pageRoutes = {
  authRoutes: {
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    VERIFICATION_SENT: (email: string) =>
      `/auth/sign-up/verification-sent?email=${email}`,
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CREATE_FIRST_INVOICE: "/auth/create-first-invoice",
    COMPLETE_PROFILE: "/auth/setup-account",
  },
};
