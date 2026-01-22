import React from "react";
import Logo from "../shared/Logo";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pb-12.25 sm:pb-15 pt-16 md:pt-31.25">
      <div className="landing-container">
        <div className="hero-bg flex flex-col gap-7 md:gap-16 lg:gap-28.5 rounded-2xl px-4 py-7 sm:py-10 sm:px-10 lg:max-w-282.5 mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            {/* logo */}
            <div>
              <div className="dark:hidden w-25 sm:w-37.5">
                <Logo className="" size="lg" variant="secondary.svg" />
              </div>
              <Logo className="hidden dark:block" variant="white-logo.svg" />
              <p className="text-sm md:text-base font-medium text-[#626161] mt-2 md:mt-4">
                More than events, it&apos;s a ecosystem.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-2 text-xl md:gap-6">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-150"
              >
                <FaFacebookF />
                <span className="hidden lg:inline-block text-sm lg:text-base">
                  Facebook
                </span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-150"
              >
                <FaInstagram />
                <span className="hidden lg:inline-block text-sm lg:text-base">
                  Instagram
                </span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-150"
              >
                <FaXTwitter />
                <span className="hidden lg:inline-block text-sm lg:text-base">
                  X
                </span>
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-150"
              >
                <FaLinkedin />
                <span className="hidden lg:inline-block text-sm lg:text-base">
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="mt-12.75 flex flex-col gap-6 text-sm md:text-base sm:flex-row-reverse sm:justify-between sm:items-center">
            <div className="flex flex-col gap-1.5 underline underline-offset-4 sm:flex-row sm:gap-6">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors duration-150"
              >
                Privacy Policy{" "}
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors duration-150"
              >
                Terms of Service
              </Link>
              {/* <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Privacy Policy{" "}
              </Link> */}
            </div>

            <p>2025 Blocstage. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
