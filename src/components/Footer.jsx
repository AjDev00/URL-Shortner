import ContactIcons from "./ContactIcons";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <div>
      <div className="bg-black opacity-90 text-white pt-10 md:pb-14">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-normal md:gap-32">
          <div className="text-4xl font-bold md:px-24 md:mt-[-100px] cursor-pointer">
            <Link to="Header" smooth duration={700}>
              Shortly
            </Link>
          </div>
          <div className="md:flex flex-row md:justify-normal md:gap-20 md:mt-[-10px]">
            <div className="font-bold flex flex-col justify-center items-center pt-10 md:justify-normal md:items-start">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Features
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center md:justify-normal md:items-start">
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Link Shortening
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Branded Links
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Analytics
                </li>
              </ul>
            </div>
            <div className="font-bold flex flex-col justify-center items-center pt-10 md:justify-normal md:items-start">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Resources
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center md:justify-normal md:items-start">
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Developers
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Blog
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Support
                </li>
              </ul>
            </div>
            <div className="font-bold flex flex-col justify-center items-center pt-10 md:justify-normal md:items-start">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Company
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center md:justify-normal md:items-start">
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  About
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Our Team
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Careers
                </li>
                <li className="mb-1 duration-300 hover:text-white md:mb-2 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
          <div className="py-10 md:py-0">
            <ContactIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
