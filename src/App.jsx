import './App.css'
import About from './Contents/About';
import Body from './Contents/Body'
import Header from './Contents/Header'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Software from './Contents/Software';
import Services from './Contents/Services';
import Client from './Contents/Client';
import Testimonial from './Contents/Testimonial';
import Section from './Contents/Section';
import Footer from './Contents/Footer';


function App() {

  return (
    
  <>

<Header/>
   
   <Body/>
   <Software/>
   <About/>
   <Services/>
   <Client/>
   <Testimonial/>
     <Section/>   
      <Footer/>
  </>
   
 
   
  )
}

export default App
