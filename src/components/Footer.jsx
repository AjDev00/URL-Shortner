import ContactIcons from "./ContactIcons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div>
      <div className="bg-black opacity-90 text-white pt-10">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Logo />
          </div>
          <div>
            <div className="font-bold flex flex-col justify-center items-center pt-10">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Features
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center">
                <li className="mb-1">Link Shortening</li>
                <li className="mb-1">Branded Links</li>
                <li className="mb-1">Analytics</li>
              </ul>
            </div>
            <div className="font-bold flex flex-col justify-center items-center pt-10">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Resources
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center">
                <li className="mb-1">Developers</li>
                <li className="mb-1">Blog</li>
                <li className="mb-1">Support</li>
              </ul>
            </div>
            <div className="font-bold flex flex-col justify-center items-center pt-10">
              <div style={{ fontSize: "22px" }} className="pb-4">
                Company
              </div>
              <ul className="font-semibold text-slate-300 flex flex-col items-center justify-center">
                <li className="mb-1">About</li>
                <li className="mb-1">Our Team</li>
                <li className="mb-1">Careers</li>
                <li className="mb-1">Contact</li>
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
