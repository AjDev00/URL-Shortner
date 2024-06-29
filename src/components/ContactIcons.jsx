import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactIcons() {
  return (
    <div>
      <div className="flex flex-row gap-6 md:mt-[-60px]">
        <div>
          <FaFacebook
            size={30}
            className="md:text-slate-400 hover:scale-125 hover:text-white duration-200 cursor-pointer"
          />
        </div>
        <div>
          <FaTwitter
            size={30}
            className="md:text-slate-400 hover:scale-125 hover:text-white duration-200 cursor-pointer"
          />
        </div>
        <div>
          <FaPinterest
            size={30}
            className="md:text-slate-400 hover:scale-125 hover:text-white duration-200 cursor-pointer"
          />
        </div>
        <div>
          <FaInstagram
            size={30}
            className="md:text-slate-400 hover:scale-125 hover:text-white duration-200 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
