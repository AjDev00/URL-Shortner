import brand from "../assets/images/icon-brand-recognition.svg";

export default function AboutFirstDetails() {
  return (
    <div>
      <div className="border border-white bg-white rounded-md z-10 h-80 shadow-md">
        <div className="flex justify-center items-center">
          <img
            src={brand}
            alt=""
            className="border border-transparent bg-blue-950 p-5 rounded-full relative bottom-10"
          />
        </div>
        <div className="font-bold flex justify-center items-center text-2xl pb-3">
          Brand Recognition
        </div>
        <div
          style={{ fontSize: "19px" }}
          className="text-slate-400 font-bold flex flex-col justify-center items-center px-4 ml-4"
        >
          <div>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help mean a thing. Branded links help
            instil confidence in your content.
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(5, 202, 202)" }}
        className="border-transparent text-white h-20 w-2 ml-[155px] opacity-65 z-0"
      ></div>
    </div>
  );
}
