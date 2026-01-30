import Logo from "../../../../../components/shared/Logo";
import { CreateProfileForm } from "../../../../../components/auth/CreateProfileForm";

export default function Page() {
  return (
    <div className="max-w-100 w-full mx-auto pb-20 overflow-y-auto px-4">
      <section className="mt-15 sm:mt-30">
        <div className="w-37.75">
          <Logo />
        </div>
        <h2 className="mt-4 font-bold text-[28px] sm:mt-6">
          Welcome to Blockstage
        </h2>

        <h3 className="mt-10 text-2xl font-medium">Tell us about yourself</h3>
        <p className="mt-2 text-base sm:text-lg text-[#4F4F4F] dark:text-[#B3B3B3]">
          Let us get to know you better!
        </p>
      </section>

      <section className="mt-8 sm:mt-6">
        <CreateProfileForm />
      </section>
    </div>
  );
}
