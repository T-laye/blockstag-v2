import { z } from "zod";

export const SignUpSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine((v) => /[A-Z]/.test(v), "Must contain at least 1 uppercase letter")
    .refine((v) => /[a-z]/.test(v), "Must contain at least 1 lowercase letter")
    .refine((v) => /\d/.test(v), "Must contain at least 1 number"),
  // .refine(
  //   (v) => /[@$!%*?&.,_\-+=#]/.test(v),
  //   "Must contain at least 1 symbol",
  // ),
});

export const SignInSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
});