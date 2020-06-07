import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Follow from './components/Followus'
import Banner2 from './components/Banner2'



function App() {
  return (
    <div className="App">
      <Banner2/>
      {/*<Projects/>*/}
      <Services/>
      <AboutUs/>
      <Contact/>
      <Follow/>
      
    </div>
  );
}

export default App;
