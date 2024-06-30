import { Link } from "react-scroll";
export default function Boost() {
  return (
    <div>
      <div className="bg-boostBgImage bg-cover text-white flex flex-col justify-center items-center gap-6 py-14 border border-transparent bg-blue-950">
        <div className="text-3xl font-bold">Boost your links today</div>
        <div className="">
          <Link
            to="Shorten"
            smooth
            duration={700}
            style={{ backgroundColor: "rgb(5, 202, 202)", fontSize: "18px" }}
            className="border-transparent text-white p-3 px-8 rounded-full hover:opacity-70 duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
