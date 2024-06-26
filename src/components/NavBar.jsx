import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../App";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  const { nav, handleNavChange } = useContext(AppContext);

  return (
    <div>
      <div onClick={handleNavChange}>
        {nav ? (
          <FaTimes className="text-slate-500" size={30} />
        ) : (
          <FaBars className="text-slate-500" size={30} />
        )}
      </div>
    </div>
  );
}
