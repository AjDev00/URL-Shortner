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
  const [allUrls, setAllUrls] = useState([]);
  const [urlError, setUrlError] = useState("");

  function handleNavChange() {
    setNav(!nav);
  }

  function handleInputChange(e) {
    setUrl(e.target.value);
  }

  function submitForm() {
    setSubmitUrl(submitUrl + 1);
    console.log(url);
    console.log(submitUrl);
  }

  useEffect(() => {
    async function getShortenedUrl() {
      try {
        const res = await fetch(
          `https://tinyurl.com/api-create.php?url=${url}`
        );
        if (!res.ok) {
          throw Error("Please add a link...");
        }
        const data = await res.text();
        console.log(data);
        setAllUrls(data);
        setUrl("");
        setUrlError("");
      } catch (urlError) {
        setUrlError(urlError.message);
        // console.log(urlError.message);
      }
    }

    getShortenedUrl();
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
