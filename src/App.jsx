import "./App.css";
import Header from "./components/Header";
import { createContext, useState } from "react";
import Home from "./components/Home";
import LinkContainer from "./components/LinkContainer";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import NavLinks from "./components/NavLinks";

export const AppContext = createContext();

function App() {
  const [nav, setNav] = useState(false);

  function handleNavChange() {
    setNav(!nav);
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ nav, handleNavChange }}>
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
