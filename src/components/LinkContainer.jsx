import { useContext } from "react";
import About from "./About";
import Shorten from "./Shorten";
import ShortenButton from "./ShortenButton";
import ShortenedLinks from "./ShortenedLinks";
import { AppContext } from "../App";

export default function LinkContainer() {
  const { url, allUrls } = useContext(AppContext);

  return (
    <div>
      <div className="px-5 bg-slate-200 md:px-24">
        <div
          name="Shorten"
          className="bg-shortenBgImage bg-cover rounded-lg border border-transparent bg-blue-950 flex flex-col justify-center items-center py-8 gap-8 relative bottom-24 mb-[-70px] md:flex-row md:justify-normal md:items-start md:bottom-12 md:mb-0"
        >
          <Shorten />
          <ShortenButton />
        </div>
        <ShortenedLinks />
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
