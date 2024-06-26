import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex flex-row justify-between px-5 pt-7 items-center">
      <Logo />
      <NavBar />
    </div>
  );
}
