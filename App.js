import "./App.css";
import About from './Components/FunctionalComponent/About';
import Home from './Components/FunctionalComponent/Home';
import Gallery from './Components/FunctionalComponent/Gallery.';
import Contact from './Components/FunctionalComponent/Contact.';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./Components/FunctionalComponent/Navbar.";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home name="Nivetha Boopathi" />} />
          <Route path='/About' element={<About />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
