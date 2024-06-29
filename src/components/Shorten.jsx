import { useContext } from "react";
import { AppContext } from "../App";

export default function Shorten() {
  const { url, handleInputChange, urlError, submitForm } =
    useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="font-bold border border-transparent p-3.5 w-72 rounded-md placeholder:font-bold focus:outline-none md:ml-10 md:w-[800px]"
        value={url}
        onChange={handleInputChange}
      />

      {/* //print error. */}
      <div className="md:ml-10 duration-300">
        {url === "" && submitForm && urlError ? (
          <i className="text-red-500 font-semibold">{urlError}</i>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
