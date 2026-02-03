/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { axiosInstance } from "../../config/axios";
import { backendRoutes, pageRoutes } from "../../lib/routes";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

declare global {
  interface Window {
    google: any;
  }
}

const GoogleAuthBtn = () => {
  const router = useRouter();
  const handleGoogleLogin = async (response: any) => {
    try {
      // console.log("Google ID token:", response.credential);

      const idToken = response.credential;

      const res = await axiosInstance.post(
        backendRoutes.authRoutes.GOOGLE_AUTH,
        {
          id_token: idToken,
        },
      );

      if (res.status === 200 && res.data.token) {
         Cookies.set("access_token", res.data.token, {
           expires: 1,
           secure: process.env.NODE_ENV === "production",
           sameSite: "Lax",
           path: "/",
         });
        toast.success(res.data.message);
        router.push(pageRoutes.dashboardRoutes.OVERVIEW);
      }
      // console.log(res);
      if (!res) {
        toast.error("Google authentication failed");
      }
    } catch (e) {
      console.log(e);
      toast.error("Google authentication failed");
    }
  };

  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: handleGoogleLogin,
      ux_mode: "popup",
      auto_select: false,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-hidden-btn"),
      { theme: "outline", size: "large" },
    );
  }, []);

  const handleClick = () => {
    const btn = document.querySelector(
      "#google-hidden-btn div[role=button]",
    ) as HTMLElement;

    btn?.click();
  };

  return (
    <>
      <div id="google-hidden-btn" style={{ display: "none" }} />

      <Button
        type="button"
        onClick={handleClick}
        className="flex justify-center w-full gap-2.5 bg-[#EFE5E1] text-[#211D1DDD] text-lg"
      >
        <FcGoogle />
        <span>Continue with Google</span>
      </Button>
    </>
  );
};

export default GoogleAuthBtn;

// "use client";

// import { useEffect } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Button } from "../ui/button";
// import { axiosInstance } from "../../config/axios";

// declare global {
//   interface Window {
//     google: any;
//   }
// }

// const GoogleAuthBtn = () => {
//   const handleGoogleLogin = (response: any) => {
//     console.log("Google ID token:", response.credential);
//   };

//   useEffect(() => {
//     if (!window.google) return;

//     window.google.accounts.id.initialize({
//       client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
//       callback: handleGoogleLogin,
//     });
//   }, []);

//   //   const handleGoogleLogin = async (response: any) => {
//   //     try {
//   //       const idToken = response.credential;

//   //       console.log("main response", response);

//   //       const data = axiosInstance.post("https://api.blocstage.com/auth/google", {
//   //         id_token: idToken,
//   //       });
//   //       // 🔥 Send token to backend
//   //       //   const res = await fetch(process.env.NEXT_PUBLIC_AUTH_ENDPOINT!, {
//   //       //     method: "POST",
//   //       //     headers: {
//   //       //       "Content-Type": "application/json",
//   //       //     },
//   //       //     body: JSON.stringify({
//   //       //       id_token: idToken,
//   //       //     }),
//   //       //   });

//   //       if (!data) {
//   //         throw new Error("Google authentication failed");
//   //       }

//   //     //   const data = await res.json();
//   //       console.log("Auth success:", data);

//   //       // TODO:
//   //       // - save access token
//   //       // - redirect user
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };

//   const handleClick = () => {
//     window.google.accounts.id.prompt(); // opens Google popup
//   };

//   return (
//     <Button
//       type="button"
//       onClick={handleClick}
//       className="flex justify-center w-full gap-2.5 bg-[#EFE5E1] text-[#211D1DDD] text-lg dark:bg-[#151515] dark:text-[#FFFFFFDD]"
//     >
//       <FcGoogle />
//       <span>Continue with Google</span>
//     </Button>
//   );
// };

// export default GoogleAuthBtn;
