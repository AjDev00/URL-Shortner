import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactIcons() {
  return (
    <div>
      <div className="flex flex-row gap-6">
        <div>
          <FaFacebook size={30} className="hover:scale-125 duration-200" />
        </div>
        <div>
          <FaTwitter size={30} className="hover:scale-125 duration-200" />
        </div>
        <div>
          <FaPinterest size={30} className="hover:scale-125 duration-200" />
        </div>
        <div>
          <FaInstagram size={30} className="hover:scale-125 duration-200" />
        </div>
      </div>
    </div>
  );
}
