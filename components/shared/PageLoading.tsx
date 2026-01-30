import Logo from "./Logo";
export default function PageLoading({
  showLogo = true,
}: {
  showLogo?: boolean;
}) {
  return (
    <div className="absolute inset-0 z-10 px-4 sm:px-7.5 md:px-10 xl:px-15">
      <div className="h-[10%] flex items-center py-5">
        {showLogo && <Logo />}
      </div>

      <div
        className={`h-[80%] flex flex-col bg-red300 justify-center items-center"`}
      >
        <div className="loader mx-auto">
          <div className="box box0">
            <div></div>
          </div>
          <div className="box box1">
            <div></div>
          </div>
          <div className="box box2">
            <div></div>
          </div>
          <div className="box box3">
            <div></div>
          </div>
          <div className="box box4">
            <div></div>
          </div>
          <div className="box box5">
            <div></div>
          </div>
          <div className="box box6">
            <div></div>
          </div>
          <div className="box box7">
            <div></div>
          </div>
          <div className="ground">
            <div></div>
          </div>
        </div>
      </div>
    </div>
    // <div className="absolute inset-0 z-10 px-4 sm:px-7.5 md:px-10 xl:px-15">
    //   <div className="h-[10%] flex items-center py-5">
    //     {showLogo && <Logo />}
    //   </div>

    //   <div
    //     className={`h-[80%] flex flex-col bg-red300 justify-center items-center"`}
    //   >
    //     <ImSpinner6 className="mx-auto text-9xl animate-spin" />
    //     {/* <div className=""></div> */}
    //   </div>
    // </div>
  );
}
