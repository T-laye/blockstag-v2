import Logo from "../../../components/shared/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="max-[1160px]:hidden flex-1 sign-bg py-10 px-11.25">
        <div className="w-30 sm:w-37.5">
          <Logo variant="white-logo.svg" />
        </div>
        <div className="mt-26">
          <p className="font-bold text-[40px] leading-[120%] text-center">
            Bring People Together, One <br className="max-[1085px]:hidden" />{" "}
            Event at a Time
          </p>
        </div>
      </div>
      <div className=" flex-1 flex justify-center">
        <div className="w-full max-w-110 mx-auto px-11">{children}</div>
      </div>
    </div>
  );
}
