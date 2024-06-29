import AboutHeader from "./AboutHeader";
import AboutFirstDetails from "./AboutFirstDetails";
import AboutSecondDetails from "./AboutSecondDetails";
import AboutThirdDetails from "./AboutThirdDetails";

export default function About() {
  return (
    <div>
      <div className="pb-24">
        <AboutHeader />
      </div>
      <div className="md:flex flex-row">
        <div>
          <AboutFirstDetails />
        </div>
        <div>
          <AboutSecondDetails />
        </div>
        <div className="pb-14">
          <AboutThirdDetails />
        </div>
      </div>
    </div>
  );
}
