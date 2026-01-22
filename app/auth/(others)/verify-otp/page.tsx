import React from "react";
import { OtpForm } from "../../../../components/auth/OtpForm";

export default function Page() {
  return (
    <div className="max-w-78.5 sm:max-w-80 w-full mx-auto">
      <section className="mt-33">
        <div className="w-12.5 sm:w-20">
          <svg
            // width="80"
            // height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <rect
              x="11.6064"
              y="11.6079"
              width="56.7846"
              height="56.7846"
              rx="7.09808"
              fill="#E04E1E"
            />
            <rect
              y="43.4995"
              width="56.7846"
              height="56.7846"
              rx="7.09808"
              transform="rotate(-50 0 43.4995)"
              fill="#E04E1E"
            />
            <path
              d="M50.7357 32.7374C50.587 32.5875 50.41 32.4684 50.215 32.3872C50.0201 32.306 49.8109 32.2642 49.5997 32.2642C49.3885 32.2642 49.1794 32.306 48.9844 32.3872C48.7894 32.4684 48.6125 32.5875 48.4637 32.7374L36.5437 44.6734L31.5357 39.6494C31.3813 39.5003 31.199 39.383 30.9992 39.3042C30.7994 39.2255 30.5861 39.1869 30.3714 39.1906C30.1568 39.1943 29.9449 39.2403 29.748 39.3259C29.551 39.4115 29.3729 39.535 29.2237 39.6894C29.0745 39.8439 28.9572 40.0262 28.8785 40.2259C28.7998 40.4257 28.7612 40.639 28.7649 40.8537C28.7686 41.0684 28.8146 41.2803 28.9002 41.4772C28.9858 41.6741 29.1093 41.8523 29.2637 42.0014L35.4077 48.1454C35.5565 48.2954 35.7334 48.4144 35.9284 48.4957C36.1234 48.5769 36.3325 48.6187 36.5437 48.6187C36.7549 48.6187 36.9641 48.5769 37.159 48.4957C37.354 48.4144 37.531 48.2954 37.6797 48.1454L50.7357 35.0894C50.8981 34.9396 51.0277 34.7578 51.1164 34.5554C51.205 34.353 51.2508 34.1344 51.2508 33.9134C51.2508 33.6925 51.205 33.4739 51.1164 33.2715C51.0277 33.0691 50.8981 32.8873 50.7357 32.7374Z"
              fill="white"
            />
          </svg>
        </div>
        <h2 className="mt-2 font-bold text-[28px] lg:text-[32px]">
          You&apos;re ready to go!
        </h2>
      </section>

      {/*  */}

      <section className="mt-10 sm:mt-12">
        <h3 className="text-2xl font-bold">Verify your account</h3>
        <p className="sm:text-lg text-[#4F4F4F] mt-2 mb-8 dark:text-[#B3B3B3]">
          Enter the 4-digit code sent to your email
        </p>

        <OtpForm />
      </section>
    </div>
  );
}
