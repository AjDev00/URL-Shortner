export default function NavLinks() {
  return (
    <div className="px-5 absolute top-20">
      <div className="bg-blue-950 text-white pt-5 font-semibold text-2xl rounded-lg w-80 shadow-xl">
        <div className="pb-5 flex flex-col justify-center items-center">
          <div className="mb-8 opacity-70 hover:opacity-100 duration-200">
            Features
          </div>
          <div className="mb-8 opacity-70 hover:opacity-100 duration-200">
            Pricing
          </div>
          <div className="mb-8 opacity-70 hover:opacity-100 duration-200">
            Resources
          </div>
        </div>
        <div className="pb-5 px-5 opacity-20">
          <hr />
        </div>
        <div className="pb-10 flex flex-col justify-center items-center">
          <div className="mb-8 opacity-70 hover:opacity-100 duration-200">
            Login
          </div>
          <div
            style={{ backgroundColor: "rgb(5, 202, 202)" }}
            className="border-transparent p-4 rounded-full w-72 flex justify-center items-center duration-300 hover:opacity-70"
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}
