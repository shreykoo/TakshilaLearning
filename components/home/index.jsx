import React from 'react';
import Banner from './Banner';
import TrustedValue from './TrustedValues';
import { Testimonials } from '../../modules'
import WhyTakshila from './WhyTakshila';
import WhatWeOffer from './WhatWeOffer';
import { YourJourney } from 'modules';
import Growth from './Growth';
import Courses from './Courses';

const Home = () => {
    return (
        <div>
            <Banner />
            <TrustedValue />
            <Courses />
            <Growth />
            <Testimonials />
            <WhyTakshila />
            <WhatWeOffer />
            <YourJourney />
        </div>
    );
};
export default Home;
