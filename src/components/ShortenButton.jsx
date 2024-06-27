import { useContext } from "react";
import { AppContext } from "../App";

export default function ShortenButton() {
  const { submitForm } = useContext(AppContext);

  return (
    <div>
      <div>
        <button
          style={{ backgroundColor: "rgb(5, 202, 202)", fontSize: "18px" }}
          className="border-transparent p-3.5 font-bold rounded-md w-72 opacity-100 text-white hover:opacity-90"
          onClick={submitForm}
        >
          Shorten It!
        </button>
      </div>
    </div>
  );
}
