import Image from "next/image";
import Link from "next/link";
import SignInForm from "../../../../../components/auth/signInForm";
// import SignInForm from "../../../../../components/auth/SignInForm";
// import SignInForm from "../../../../../components/auth/SignInForm";

export default function Page() {
  return (
    <div className="pt-20 lg:pt-28 w-full">
      <div className="flex flex-col items-center justifycenter">
        <Link href="/" className="inline-block w-15 lg:w-8">
          <Image
            className="h-full w-full object-contain"
            height={100}
            width={100}
            alt="logo"
            src="/logo/primary-logo-icon.svg"
          />
        </Link>

        <h2 className="mt-4 lg:mt-1.5 font-bold text-2xl lg:text-[32px]">
          Welcome Back
        </h2>
        <p className="mt-2 text-base lg:text-lg text-primary">
          Event that builds communities.
        </p>
      </div>
      <div>
        <SignInForm />
      </div>
    </div>
  );
}
