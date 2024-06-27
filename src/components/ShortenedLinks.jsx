import { useContext } from "react";
import { AppContext } from "../App";

export default function ShortenedLinks() {
  const { url, allUrls, submitUrl } = useContext(AppContext);
  const reUrl = url;

  return (
    <div>
      <div>
        {/* {submitUrl && <div>{reUrl}</div>} */}
        <div>
          <hr />
        </div>
        <div>{allUrls}</div>
      </div>
    </div>
  );
}
