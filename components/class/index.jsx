import React from 'react';
import Banner from './Banner';
import Introduction from './Introduction';
import { YourJourney } from 'modules';
import ChooseSubjects from './ChooseSubjects';
import ValueAndGrowth from './Growth';

const SpecificClass = () => {
    return (
        <div>
            <Banner />
            <Introduction />
            <ValueAndGrowth />
            <ChooseSubjects />
            <YourJourney />
        </div>
    );
};
export default SpecificClass;
