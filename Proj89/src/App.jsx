import React from 'react';
import './App.css'; 
import Navbar from './Navbar/Navbar';
import Bussiness from './Components/Bussiness';
import Industries from './Components/Industries/Industries';
import Vision from './Components/Vision/Vision';
import Cilent from './Components/Cilent/Cilent';
import Tech from './Components/Tech/Tech';
import Performance from './Components/Performance/Performance';
import Image from './Components/Image/Image';
import Images5 from './Components/Images5/Images5';
import Navbar5 from './Components/Navbar5/Navbar5';
import AboutCompany from './Components/AboutCompany/AboutCompany';
import Cards from './Components/Cards/Cards';
import Contact5 from './Components/Contact5/Contact5';
import Trust from './Components/Trust/Trust';
import {Routes,Route} from "react-router-dom"
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import Coll from './Components/Coll/Coll';
import Achi from './Components/Achivement/Achi';
import Strip from './Components/Strip/Strip';
import LeadForm from './Components/LeadForm/LeadForm';
import NavAbout from './Components/NavAbout/NavAbout';
import Contact from "./Components/Contact/Contact"
const App = () => {
  return (
    <div>
      <Strip/>
      <Navbar5/>

      <Navbar />

           <div className='section-gap'> <Coll/></div> 
    
<div className="section-gap"><Image /></div>
      <div className="section-gap"><Bussiness /></div>
      <div className='section-gap'><Cards/></div>
      
      {/* <div className="section-gap"><AboutCompany/> </div> */}
        <Achi/>
      <div><Trust/></div>
      {/* <div ><Vision /></div> */}
      {/* <div><Images5/></div> */}
    
      <div ><Industries /></div>
      <div  ><Cilent /></div>
         
      {/* <div><Performance /></div> */}
      {/* <div><Contact5/></div>
      <div><PrivacyPolicy/></div> */}
   
       <Routes>
      <Route path="/" element={<Tech />} />
      <Route path="/contact5" element={<Contact5 />} />
      <Route path="/LeadForm" element={<LeadForm/>}></Route>
      <Route path='/About' element={<NavAbout/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
   
         {/* <Route path="/about" element={<About />} /> */}
      <Route path="/privacy" element={<PrivacyPolicy />} />
         <Route path="/Navbar" element={<Navbar/>}></Route>
          {/* <Tech /> */}
        </Routes> 
        </div>
  );
};

export default App;
