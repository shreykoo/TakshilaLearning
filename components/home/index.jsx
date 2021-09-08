import React from 'react';
import Banner from './Banner';
import TrustedValue from './TrustedValues';
import { Testimonials } from '../../modules'
import WhyTakshila from './WhyTakshila';
import WhatWeOffer from './WhatWeOffer';
import { YourJourney } from 'modules';


const Home = () => {
    return (
        <div>
            <Banner />
            <TrustedValue />
            <Testimonials />
            <WhyTakshila />
            <WhatWeOffer />
            <YourJourney />
        </div>
    );
};
export default Home;
