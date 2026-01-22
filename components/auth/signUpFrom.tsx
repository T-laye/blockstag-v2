"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../lib/validations/authValidations";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import InputField from "../ui/custom/InputField";
import Link from "next/link";
import { pageRoutes } from "../../lib/routes";
import { useRouter } from "next/navigation";

type SignUpValues = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
    const router = useRouter();
  //   const toast = useToast();

  const form = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignUpValues) => {
    // const { email, password } = values;

    // mutate({ email, password });
    setLoading(true);
    console.log("Submitted:", values);
    setTimeout(() => {
      setLoading(false);
      toast.success("Sign up successful! Please verify your email.");
        router.push(`${pageRoutes.authRoutes.VERIFY_OTP(values.email)}`);
    }, 1000);
  };

  return (
    <div className="mt-8 w-full">
      <section className="w-full">
        <Button className="flex justify-center w-full gap-2.5 bg-[#EFE5E1] text-[#211D1DDD] text-lg dark:bg-[#151515] hover:text-white dark:text-[#FFFFFFDD]">
          <FcGoogle className="" />
          <span>Continue with Google</span>
        </Button>

        <div className="flex items-center gap-4 mt-8">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(230, 230, 230, 0) 17.69%, #BFB7B7 22.62%, rgba(191, 183, 183, 0.482353) 75.88%, rgba(230, 230, 230, 0) 81.73%)",
            }}
            className="border-white h-px w-full"
          ></div>
          <p className="whitespace-nowrap text-sm text-[#4F4F4F] dark:text-[#B3B3B3]">
            or Sign up with Email
          </p>
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(230, 230, 230, 0) 17.69%, #BFB7B7 22.62%, rgba(191, 183, 183, 0.482353) 75.88%, rgba(230, 230, 230, 0) 81.73%)",
            }}
            className="border-white h-px w-full"
          ></div>
        </div>
      </section>

      {/*  */}

      <section className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* --------------------------------
              EMAIL FIELD
          -------------------------------- */}
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>

                  <FormControl>
                    <InputField
                      {...field}
                      label=""
                      placeholder="e.g. johndoe@gmail.com"
                      type="email"
                      error={fieldState.error?.message ?? null}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* --------------------------------
              PASSWORD FIELD
          -------------------------------- */}
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <div>
                      <InputField
                        {...field}
                        label=""
                        placeholder="Enter your password"
                        type="password"
                        error={fieldState.error?.message ?? null}
                      />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <div>
              <p className="text-sm text-center my-7.5">
                By creating an account you agree to all of our <br />
                <span className="font-bold underline underline-offset-4">
                  Terms and Conditions
                </span>{" "}
              </p>
            </div> */}
            <div className="flex items-center justify-between gap-1 mt-8">
              <p className="text-[#4F4F4F] dark:text-[#B3B3B3]">
                Already a user?{" "}
                <Link
                  className="text-primary font-bold whitespace-nowrap"
                  href={pageRoutes.authRoutes.SIGN_IN}
                >
                  Sign in
                </Link>
              </p>
              <Button
                type="submit"
                isLoading={loading}
                className="w-full max-w-26.25 sm:max-w-30"
              >
                Sign up
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
};

export default SignUpForm;
