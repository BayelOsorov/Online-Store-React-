import React from 'react';
import MyCarousel from '../components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Section2 from '../components/Section2';
import Section1 from '../components/Section1';
import ByuBlock from '../components/BuyBlock';
import OurPart from '../components/OurPart';
import MyFooter from '../components/Footer';
import CaseCards from '../components/CaseCards';
import BagCards from '../components/BagCards';

const MainPage = () => {
    return (
        <>
            <MyCarousel />
            <Section1 />
            <CaseCards />
            <Section2 />
            <BagCards />
            <OurPart />
            <ByuBlock />
            <MyFooter />
        </>
    );
};

export default MainPage;