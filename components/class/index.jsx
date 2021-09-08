import React, { useEffect, useState } from 'react';
import router from 'next/router';
import Banner from './Banner';
import Introduction from './Introduction';
import { YourJourney } from 'modules';
import ChooseSubjects from './ChooseSubjects';

const SpecificClass = () => {

    const [id, setId] = useState(null);
    useEffect(() => {
        setId(router.query.id)
    }, [])
    return (
        <div>
            <Banner />
            <Introduction />
            <ChooseSubjects />
            <YourJourney />
        </div>
    );
};
export default SpecificClass;
