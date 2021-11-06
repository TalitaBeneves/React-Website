import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFor, homeObjFive } from '../components/InfoSection/Data';
import Agentes from '../components/Agentes';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <InfoSection {...homeObjTwo} />
           <InfoSection {...homeObjThree} />
           <Agentes />
           <InfoSection {...homeObjFor} />
           <InfoSection {...homeObjFive} />
           
           <Footer />
        </>
    );
};

export default Home
