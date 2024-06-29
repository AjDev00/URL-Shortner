import "./App.css";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import Home from "./components/Home";
import LinkContainer from "./components/LinkContainer";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import NavLinks from "./components/NavLinks";

export const AppContext = createContext();

function App() {
  const [nav, setNav] = useState(false);
  const [url, setUrl] = useState("");
  const [submitUrl, setSubmitUrl] = useState(0);
  const [allUrls, setAllUrls] = useState({ link: [] });
  const [urlError, setUrlError] = useState(false);

  function handleNavChange() {
    setNav(!nav);
  }

  function handleInputChange(e) {
    setUrl(e.target.value);
  }

  function submitForm() {
    setSubmitUrl(submitUrl + 1);
    if (url === "") {
      setUrl("");
    }
    // console.log(url);
    // console.log(submitUrl);
  }

  useEffect(() => {
    async function getShortenedUrl(link) {
      let data;
      try {
        const res = await fetch(
          `https://tinyurl.com/api-create.php?url=${link}`
        );
        if (!res.ok) {
          throw Error("Please add a link...");
        }
        data = await res.text();
        console.log(data);
        setUrl("");

        // if (url === "") {
        //   setUrlError(urlError.message);
        // }
        setUrlError(false);
      } catch (urlError) {
        setUrlError(true);
        setUrlError(urlError.message);
        // console.log(urlError.message);
      }

      setAllUrls((prevUrl) => {
        const newUrls = {
          firstInput: url,
          secondInput: data,
          // isCopied: false,
          errMsg: urlError,
        };

        return {
          ...prevUrl,
          link: [...prevUrl.link, newUrls],
        };
      });
    }

    getShortenedUrl(url);
    // setUrl("");
  }, [submitUrl]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          nav,
          handleNavChange,
          url,
          handleInputChange,
          submitForm,
          allUrls,
          urlError,
        }}
      >
        <Header />
        <Home />
        <LinkContainer />
        <Boost />
        <Footer />
        {nav && <NavLinks />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
