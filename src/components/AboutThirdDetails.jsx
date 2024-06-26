import fully from "../assets/images/icon-fully-customizable.svg";

export default function AboutThirdDetails() {
  return (
    <div>
      <div className="border border-white bg-white rounded-md z-10 h-[270px] shadow-md">
        <div className="flex justify-center items-center">
          <img
            src={fully}
            alt=""
            className="border border-transparent bg-blue-950 p-5 rounded-full relative bottom-10"
          />
        </div>
        <div className="font-bold flex justify-center items-center text-2xl pb-3">
          Fully Customizable
        </div>
        <div
          style={{ fontSize: "19px" }}
          className="text-slate-400 font-bold flex flex-col justify-center items-center"
        >
          <div>Improve brand awareness and </div>
          <div>content discoverability through</div>
          <div>customizable links, supercharging</div>
          <div>audience engagement. </div>
        </div>
      </div>
    </div>
  );
}
