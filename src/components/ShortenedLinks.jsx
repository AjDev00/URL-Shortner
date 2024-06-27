import { useContext, useState } from "react";
import { AppContext } from "../App";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ShortenedLinks() {
  const { allUrls, submitForm } = useContext(AppContext);

  //copy link params.
  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = (index) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 10000); // Reset after 10secs.
  };

  return (
    <div>
      <div>
        {submitForm && allUrls && (
          <div>
            {allUrls.link.map((item, index) => (
              <div key={index}>
                <div className="ml-0 mb-4">
                  {item.firstInput && (
                    <div className="border border-transparent w-80 flex flex-col items-start p-3 rounded-tl-md rounded-tr-md bg-white shadow-sm">
                      <span
                        style={{ fontSize: "20px" }}
                        className="ml-2 font-bold"
                      >
                        {item.firstInput}
                      </span>
                    </div>
                  )}
                  {item.secondInput && (
                    <div className="mt-0.5 border border-transparent w-80 flex flex-col gap-3 items-start p-3 rounded-bl-md rounded-br-md bg-white shadow-sm h-32">
                      <a
                        style={{
                          color: "rgb(5, 202, 202)",
                          fontSize: "20px",
                        }}
                        className="ml-2 underline"
                        href={item.secondInput}
                      >
                        {item.secondInput}
                      </a>
                      <div className="mt-3">
                        {item.firstInput && item.secondInput && (
                          <CopyToClipboard
                            text={item.secondInput}
                            onCopy={() => handleCopy(index)}
                          >
                            {copiedIndex === index ? (
                              <button
                                style={{
                                  fontSize: "18px",
                                }}
                                className="border-transparent font-bold rounded-md w-72 ml-1 p-2 text-white duration-300 bg-blue-950"
                              >
                                Copied!
                              </button>
                            ) : (
                              <button
                                style={{
                                  backgroundColor: "rgb(5, 202, 202)",
                                  fontSize: "18px",
                                }}
                                className="border-transparent font-bold rounded-md w-72 ml-1 p-2 text-white hover:opacity-50 duration-300"
                              >
                                Copy
                              </button>
                            )}
                          </CopyToClipboard>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
