import Link from "next/link";
import Logo from "../../../components/shared/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="max-[1160px]:hidden flex-1 sign-bg py-10 px-11.25">
        <div className="w-30 sm:w-37.5">
          <Logo variant="white-logo.svg" />
        </div>
        <div className="mt-26">
          <p className="font-bold text-[40px] leading-[120%] text-center text-white">
            Bring People Together, One <br className="max-[1085px]:hidden" />{" "}
            Event at a Time
          </p>
        </div>
      </div>
      <div className=" flex-1 flex justify-between flex-col items-center pb-11 overflow-y-auto">
        <div className="w-full max-w-110 mx-auto px-4 sm:px-11">{children}</div>
        <div className="text-center text-sm px-4 mt-29">
          By signing up, you agree to Blocstage&apos;s{" "}
          <Link href="#" className="font-bold underline underline-offset-4">
             privacy policy
          </Link>
           and{" "}
          <Link href="#" className="font-bold underline underline-offset-4">
             terms of use
          </Link>
        </div>
      </div>
    </div>
  );
}
