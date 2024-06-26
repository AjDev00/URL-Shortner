import About from "./About";
import Shorten from "./Shorten";
import ShortenButton from "./ShortenButton";

export default function LinkContainer() {
  return (
    <div>
      <div className="px-5 bg-slate-200">
        <div className="bg-shortenBgImage bg-cover rounded-lg border border-transparent bg-blue-950 flex flex-col justify-center items-center py-8 gap-8 relative bottom-24">
          <Shorten />
          <ShortenButton />
        </div>
        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
