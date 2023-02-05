import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import SectionTwo from './components/SectionTwo';
import Title from './components/Title';
import ThirdSection from './components/ThirdSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='snap-y snap-mandatory scroll-smooth h-screen w-screen overflow-scroll'>
      <Navbar/>
      <Title />
      <SectionTwo />
      {/* <ThirdSection /> */}
      <Footer/>
    </div>
  );
}

export default App;
