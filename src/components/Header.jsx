import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div name="Header">
      <div className="flex flex-row justify-between px-5 pt-7 items-center md:px-24 md:pt-5">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
}
