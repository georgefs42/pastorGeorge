import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import About from "./components/3-About/About";
import Main from "./components/4-Main/Main";
import Contact from "./components/5-Contact/Contact";
import Footer from "./components/6-Footer/Footer";



function App() {
 
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

    </div>
  );
}

export default App;
