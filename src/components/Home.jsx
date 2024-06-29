import homeImage from "../assets/images/illustration-working.svg";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div>
      <div className="pt-10 md:flex flex-row-reverse">
        <div className="md:m">
          <img
            src={homeImage}
            alt=""
            className="h-96 px-5 w-[100%] md:ml-20 md:h-[450px] md:w-[80%]"
          />
        </div>
        <div className="md:flex flex-col md:justify-normal md:items-start">
          <div className="pt-8 flex flex-col justify-center items-center md:items-start md:justify-start">
            <div className="text-4xl font-bold pb-4 md:text-6xl">
              More than just
              <span className="">
                <br />
              </span>
              <span className="ml-4 md:ml-0">shorter links</span>
            </div>
          </div>
          <div
            style={{ fontSize: "19px" }}
            className="text-slate-400 font-bold flex flex-col justify-center items-center md:items-start"
          >
            <div>Build your brand's recognition and </div>
            <div>get detailed insights on how your</div>
            <div>links are performing.</div>
          </div>
          <div className="flex justify-center items-center pt-7 pb-72 md:pb-64">
            <Link
              to="Shorten"
              smooth
              duration={700}
              style={{ backgroundColor: "rgb(5, 202, 202)", fontSize: "18px" }}
              className="border text-white p-4 px-10 rounded-full hover:opacity-50 duration-300 cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
