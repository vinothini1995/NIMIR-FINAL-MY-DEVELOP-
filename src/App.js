// import Header from './components/Header';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Routing from './Routes/Routing';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Expertise from './pages/Expertise';
import Casestudy from './pages/Casestudy';
import Whitepapers from './pages/Whitepapers';
import Careers from './pages/Careers';
import About from './pages/About';
import Connectnow from './pages/Connectnow';
import ACD from './pages/ACD.js';
import CBT from './pages/CBT.js';
import CS from './pages/CS.js';
import CVS from './pages/CVS.js';
import DS from './pages/DS.js';
import EAI from './pages/EAI.js';
import GAS from './pages/GAS.js';
import MLS from './pages/MLS.js';
import OCR from './pages/OCR.js';
import ExpertiseAIML from './pages/ExpertiseAIML.js';
import ExpertiseGAI from './pages/ExpertiseGAI.js';
import ScrollToTop from './components/ScrollToTop.js';
import InnovationStreet from './pages/InnovationStreet.js';
import CloudNative from './pages/CloudNative.js';
import Empower from './pages/Empower.js';
import Unlocking from './pages/Unlocking.js';
import Architech from './pages/Architech.js';
import CasestudyCS from './pages/CasestudyCS.js';
// import Cybersecurity from './pages/Cybersecurity.js';
function App() {
  return (
    <div className="App">
     <ScrollToTop/>
        {/* <Header /> */}
        {/* <Routing />
      */}
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/casestudy" element={<Casestudy />} />
      <Route path="/whitepapers" element={<Whitepapers />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/connectnow" element={<Connectnow />} />
      <Route path="/services/ACD"element={<ACD/>}/>
      <Route path="/services/CBT" element={<CBT />}/>
      <Route path="/services/CS" element={<CS />}/>
      <Route path="/services/CVS" element={<CVS />}/>
      <Route path="/services/DS" element={<DS />}/>
      <Route path="/services/EAI" element={<EAI />}/>
      <Route path="/services/GAS" element={<GAS />}/>
      <Route path="/services/MLS" element={<MLS />}/>
      <Route path="/services/OCR" element={<OCR />}/>
      <Route path="/expertise/ExpertiseAIML" element={<ExpertiseAIML/>}/>
      <Route path="/expertise/ExpertiseGAI" element={<ExpertiseGAI/>}/>
      <Route path="/casestudy/InnovationStreet" element={<InnovationStreet/>}/>
      <Route path="/casestudy/CloudNative" element={<CloudNative/>}/>
      <Route path="/casestudy/Empower" element={<Empower/>}/>
      <Route path="/casestudy/Unlocking" element={<Unlocking/>}/>
      <Route path="/casestudy/Architech" element={<Architech/>}/>
      {/* <Route path="/casesstudy/Cybersecurity" element={<Cybersecurity/>}/> */}
      <Route path="/casestudy/Casestudycs" element={<CasestudyCS/>}/>
      



    </Routes>
   
    </div>
  );
}

export default App;
