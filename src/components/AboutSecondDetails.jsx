import records from "../assets/images/icon-detailed-records.svg";

export default function AboutSecondDetails() {
  return (
    <div>
      <div className="border border-white bg-white rounded-md z-10 h-80 shadow-md">
        <div className="flex justify-center items-center">
          <img
            src={records}
            alt=""
            className="border border-transparent bg-blue-950 p-5 rounded-full relative bottom-10"
          />
        </div>
        <div className="font-bold flex justify-center items-center text-2xl pb-3">
          Detailed Records
        </div>
        <div
          style={{ fontSize: "19px" }}
          className="text-slate-400 font-bold flex flex-col justify-center items-center px-4 ml-5"
        >
          <div>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your with your content helps inform better
            decisions.
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(5, 202, 202)" }}
        className="border-transparent text-white h-20 w-2 ml-[155px] opacity-65 z-0"
      ></div>
    </div>
  );
}
