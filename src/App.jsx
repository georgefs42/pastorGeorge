import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import About from "./components/3-About/About";
import Main from "./components/4-Main/Main";
import Contact from "./components/5-Contact/Contact";
import Footer from "./components/6-Footer/Footer";
import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />

      <Hero />
      <div className="divider" />

      <About />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <a href="#up" className="scrollToTop" aria-label="Scroll to top">
          <FaChevronUp size={24} />
        </a>
      )}
    </div>
  );
}

export default App;