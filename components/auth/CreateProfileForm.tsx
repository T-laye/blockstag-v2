"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "../../lib/validations/authValidations";
import { toast } from "sonner";
import InputField from "../ui/custom/InputField";
import z from "zod";

type ProfileValues = z.infer<typeof ProfileSchema>;

export const CreateProfileForm = () => {
  const [loading, setLoading] = useState(false);
  //   const router = useRouter();
  //   const toast = useToast();

  const form = useForm<ProfileValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      country: "",
    },
  });

  const onSubmit = async (values: ProfileValues) => {
    // const { email, password } = values;

    // mutate({ email, password });
    setLoading(true);
    console.log("Submitted:", values);
    setTimeout(() => {
      setLoading(false);
      toast.success("Successful");
      //   router.push(`${authRoutes.VERIFICATION_SENT}?email=${values.email}`);
    }, 1000);
  };

  return (
    <section className="mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* --------------------------------
              Name FIELD
          -------------------------------- */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>

                  <FormControl>
                    <InputField
                      {...field}
                      label=""
                      placeholder="e.g. Justin"
                      type="text"
                      error={fieldState.error?.message ?? null}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>

                  <FormControl>
                    <InputField
                      {...field}
                      label=""
                      placeholder="e.g. Joe"
                      type="text"
                      error={fieldState.error?.message ?? null}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* --------------------------------
              Username FIELD
          -------------------------------- */}
          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Create a Username</FormLabel>

                <FormControl>
                  <InputField
                    {...field}
                    label=""
                    value={
                      field.value.startsWith("@")
                        ? field.value
                        : `@${field.value}`
                    }
                    onChange={(e) =>
                      field.onChange(e.target.value.replace(/^@/, ""))
                    }
                    placeholder="e.g. Joe"
                    type="text"
                    error={fieldState.error?.message ?? null}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* --------------------------------
              Country FIELD
          -------------------------------- */}
          <FormField
            control={form.control}
            name="country"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>

                <FormControl>
                  <InputField
                    {...field}
                    label=""
                    placeholder="Nigeria"
                    type="text"
                    error={fieldState.error?.message ?? null}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" isLoading={loading} className="w-full mt-12">
            Continue
          </Button>
        </form>
      </Form>
    </section>
  );
};
