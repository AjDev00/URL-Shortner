import ContactIcons from "./ContactIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div>
      <div className="bg-black opacity-90 text-white pt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl font-bold">
            {/* <Logo /> */}
            Shortly
          </div>
          <div>
            <div className="font-bold flex flex-col justify-center items-center pt-10">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Features
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center">
                <li className="mb-1 duration-300 hover:text-white">
                  Link Shortening
                </li>
                <li className="mb-1 duration-300 hover:text-white">
                  Branded Links
                </li>
                <li className="mb-1 duration-300 hover:text-white">
                  Analytics
                </li>
              </ul>
            </div>
            <div className="font-bold flex flex-col justify-center items-center pt-10">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Resources
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center">
                <li className="mb-1 duration-300 hover:text-white">
                  Developers
                </li>
                <li className="mb-1 duration-300 hover:text-white">Blog</li>
                <li className="mb-1 duration-300 hover:text-white">Support</li>
              </ul>
            </div>
            <div className="font-bold flex flex-col justify-center items-center pt-10">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Company
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center">
                <li className="mb-1 duration-300 hover:text-white">About</li>
                <li className="mb-1 duration-300 hover:text-white">Our Team</li>
                <li className="mb-1 duration-300 hover:text-white">Careers</li>
                <li className="mb-1 duration-300 hover:text-white">Contact</li>
              </ul>
            </div>
          </div>
          <div className="py-10">
            <ContactIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
