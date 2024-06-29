export default function AboutHeader() {
  return (
    <div>
      <div>
        <div
          style={{ fontSize: "30px" }}
          className="font-bold flex justify-center items-center pb-4"
        >
          Advanced Statistics
        </div>
        <div
          style={{ fontSize: "19px" }}
          className="text-slate-400 font-bold flex flex-col justify-center items-center px-8 ml-4"
        >
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            Track how your links are performing across the web with{" "}
            <div className="hidden md:flex md:mt-[-30px]">
              <br />
            </div>{" "}
            our advanced statistics board.
          </div>
        </div>
      </div>
    </div>
  );
}
