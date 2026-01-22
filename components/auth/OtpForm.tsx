"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { pageRoutes } from "../../lib/routes";

export function OtpForm() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 4) {
      alert("Please enter the 4-digit code");
      return;
    }

    console.log("Submitted OTP:", otp);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("OTP Verification Successful");
      router.push(`${pageRoutes.authRoutes.UPDATE_PROFILE}`);
    }, 1000);
  };

  return (
    <form onSubmit={onSubmit}>
      <InputOTP
        value={otp}
        onChange={setOtp}
        maxLength={4}
        pattern={REGEXP_ONLY_DIGITS}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>

      <div className="flex justify-between items-center mt-14 sm:mt-12 gap-3">
        <button
          type="button"
          className="font-bold text-primary cursor-pointer"
          onClick={() => {
            console.log("Resend OTP");
          }}
        >
          Resend Code
        </button>

        <Button
          type="submit"
          disabled={otp.length !== 4 || loading}
          isLoading={loading}
          className="w-full max-w-22.5 sm:max-w-24"
        >
          Verify
        </Button>
      </div>
    </form>
  );
}
