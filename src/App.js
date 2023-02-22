import "./App.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import CallToAction from "./pages/CallToAction";
import Footer from "./pages/Footer";

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
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
