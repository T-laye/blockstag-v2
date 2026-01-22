import { PiSpinnerLight } from "react-icons/pi";

const BtnLoader = () => {
  return (
    <div className="animate-spin duration-50 scale-y-[-1.5] scale-x-[1.5] py-1">
      {/* <ImSpinner6 className="mx-auto w-20 h-20" /> */}
      <PiSpinnerLight className="mx-auto w-20 h-20" />
    </div>
  );
};

export default BtnLoader;
