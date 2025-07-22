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
const App = () => {
  return (
    <div>
      <Navbar />
      <hr />

      <div className="section-gap"><Bussiness /></div>
      <div className="section-gap"><Image /></div>
      <div className="section-gap"><Vision /></div>
      <div><Images5/></div>
      <div className="section-gap"><Industries /></div>
      <div className="section-gap"><Cilent /></div>
      <div className="section-gap"><Performance /></div>
      <div ><Tech /></div>
    </div>
  );
};

export default App;
