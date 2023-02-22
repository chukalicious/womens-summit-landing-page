import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
