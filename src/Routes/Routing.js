import React from 'react';
import { Routes, Route,Router } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Expertise from '../pages/Expertise';
import Casestudy from '../pages/Casestudy';
import Whitepapers from '../pages/Whitepapers';
import Careers from '../pages/Careers';
import About from '../pages/About';
import Connectnow from '../pages/Connectnow';

const Routing = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/casestudy" element={<Casestudy />} />
      <Route path="/whitepapers" element={<Whitepapers />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/connectnow" element={<Connectnow />} />
    </Routes>
   
  );
};

export default Routing;
