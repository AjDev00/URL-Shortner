import homeImage from "../assets/images/illustration-working.svg";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div>
      <div className="pt-10">
        <div className="">
          <img src={homeImage} alt="" className="h-96 ml-7 w-[100%]" />
        </div>
        <div>
          <div className="pt-8 flex flex-col justify-center items-center">
            <div className="text-4xl font-bold pb-4">
              More than just <br />
              <span className="ml-4">shorter links</span>
            </div>
          </div>
          <div
            style={{ fontSize: "19px" }}
            className="text-slate-400 font-bold flex flex-col justify-center items-center"
          >
            <div>Build your brand's recognition and </div>
            <div>get detailed insights on how your</div>
            <div>links are performing.</div>
          </div>
          <div className="flex justify-center items-center pt-7 pb-56">
            <Link
              to="Shorten"
              smooth
              duration={700}
              style={{ backgroundColor: "rgb(5, 202, 202)", fontSize: "18px" }}
              className="border opacity-100 text-white p-4 px-10 rounded-full hover:opacity-50 duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
