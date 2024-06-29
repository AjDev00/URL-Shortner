import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../App";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  const { nav, handleNavChange } = useContext(AppContext);

  return (
    <div>
      <div className="md:hidden" onClick={handleNavChange}>
        {nav ? (
          <FaTimes className="text-slate-500" size={30} />
        ) : (
          <FaBars className="text-slate-500" size={30} />
        )}
      </div>
      <div
        style={{ fontSize: "14px" }}
        className="hidden md:flex flex-row font-bold gap-6 text-slate-400 justify-center items-center cursor-pointer"
      >
        <div className="hover:text-slate-800 duration-300">Login</div>
        <div
          style={{ backgroundColor: "rgb(5, 202, 202)" }}
          className="border-transparent p-2 px-5 font-bold rounded-full text-white hover:opacity-50 duration-300"
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}
