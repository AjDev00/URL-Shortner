import logo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <div className="md:flex flex-row justify-center items-center md:gap-8">
      <div>
        <img src={logo} alt="" className="cursor-pointer" />
      </div>
      <div
        style={{ fontSize: "14px" }}
        className="hidden md:flex md:gap-6 text-slate-400 font-bold"
      >
        <div className="hover:text-slate-800 duration-300 cursor-pointer">
          Features
        </div>
        <div className="hover:text-slate-800 duration-300 cursor-pointer">
          Pricing
        </div>
        <div className="hover:text-slate-800 duration-300 cursor-pointer">
          Resources
        </div>
      </div>
    </div>
  );
}
