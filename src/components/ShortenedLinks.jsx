import { useContext } from "react";
import { AppContext } from "../App";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ShortenedLinks() {
  const { allUrls, handleCopy, submitForm, copied } = useContext(AppContext);

  return (
    <div>
      <div>
        {submitForm && allUrls && (
          <div>
            {allUrls.link.map((item) => (
              <div key={item.firstInput}>
                <div className="ml-4 mb-4">
                  {item.firstInput && (
                    <div className="border border-transparent w-72 flex flex-col items-start p-2 rounded-tl-md rounded-tr-md bg-white shadow-sm">
                      <span className="ml-2 font-bold">{item.firstInput}</span>
                    </div>
                  )}
                  {item.secondInput && (
                    <div className="mt-0.5 border border-transparent w-72 flex flex-col items-start p-2 rounded-bl-md rounded-br-md bg-white shadow-sm">
                      <a
                        style={{
                          color: "rgb(5, 202, 202)",
                        }}
                        className="ml-2 font-bold underline"
                        href={item.secondInput}
                      >
                        {item.secondInput}
                      </a>
                      <div className="mt-3">
                        {item.firstInput && item.secondInput && (
                          <CopyToClipboard
                            text={item.secondInput}
                            onCopy={handleCopy}
                          >
                            {!copied ? (
                              <button
                                style={{
                                  backgroundColor: "rgb(5, 202, 202)",
                                  fontSize: "18px",
                                }}
                                className="border-transparent font-bold rounded-md w-64 ml-2 p-2 text-white hover:opacity-70 duration-300"
                              >
                                Copy
                              </button>
                            ) : (
                              <button
                                style={{
                                  // backgroundColor: "rgb(5, 202, 202)",
                                  fontSize: "18px",
                                }}
                                className="border-transparent font-bold rounded-md w-64 ml-2 p-2 text-white duration-300 bg-blue-950"
                              >
                                Copied!
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
