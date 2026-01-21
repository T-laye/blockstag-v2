"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Logo from "../shared/Logo";
import { ThemeToggle } from "../shared/ThemeSwitcher";
import { Button } from "../ui/button";
import { pageRoutes } from "../../lib/routes";
import { gsap } from "gsap";

export default function Header() {
  const router = useRouter();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const buttonsRef = useRef(null);

  const gotoSignUp = () => {
    router.push(pageRoutes.authRoutes.SIGN_UP);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
      });

      tl.from(
        logoRef.current,
        {
          x: -30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4",
      );

      tl.from(
        buttonsRef.current,
        {
          x: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.6",
      );

      // Scroll hide/show effect
      let lastScroll = 0;

      const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 100) {
          // Scrolling down - hide header
          gsap.to(headerRef.current, {
            y: -100,
            duration: 0.3,
            ease: "power2.in",
          });
        } else if (currentScroll < lastScroll) {
          // Scrolling up - show header
          gsap.to(headerRef.current, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }

        lastScroll = currentScroll;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 hero-bg py-4 min-h-21.5 flex items-center z-50"
    >
      <div className="landing-container w-full flex justify-between items-center">
        <div ref={logoRef} className="w-30 sm:w-37.5">
          <Logo />
        </div>

        <div ref={buttonsRef} className="flex items-center gap-3">
          <Button onClick={gotoSignUp} variant="secondary">
            Sign Up
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import Logo from "../shared/Logo";
// import { ThemeToggle } from "../shared/ThemeSwitcher";
// import { Button } from "../ui/button";
// import { pageRoutes } from "../../lib/routes";

// export default function Header() {
//   const router = useRouter();

//   const gotoSignUp = () => {
//     router.push(pageRoutes.authRoutes.SIGN_UP);
//   };

//   return (
//     <header className="fixed inset-x-0 top-0 hero-bg py-4 min-h-21.5 flex items-center z-50">
//       <div className="landing-container w-full flex justify-between items-center">
//         <Logo />

//         <div className="flex items-center gap-3">
//           <Button onClick={gotoSignUp} variant="secondary">
//             Sign Up
//           </Button>
//           <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }
