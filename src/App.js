import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portifolio from "./Components/Portifolio/Portifolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <Services/>
          <Experience/>
          <Works/>
          <Portifolio/>
          <Testimonials/>
          <Contact/>

    </div>
  );
}

export default App;


/*
  Autor: Daniel Oliveira
  Email: danieloliveira.webmaster@gmail.com
  Manaus/Amazonas
  12/04/2022
*/
