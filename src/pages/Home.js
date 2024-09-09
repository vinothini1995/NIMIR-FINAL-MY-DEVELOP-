import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import Header from '../components/Header' ;
import Footer from '../components/Footer';
import Servicesforhome from '../components/Servicesforhome';
const Home = () => {
  return (
    <div>
    <Header/>
     <BannerCarousel/>
    <Servicesforhome/>

     <Footer/>
    </div>
  );
};

export default Home;
