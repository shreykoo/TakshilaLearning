import React from 'react';
import Banner from './Banner';
import ValueAndGrowth from './ValueAndGrowth';
import PickACourse from './PickACourse';
import VideosSection from './VideosSection';
import Faq from './Faq';
import StudentFeedback from './Feedback';

const SubjectsPage = () => {
    return (
        <div>
            <Banner />
            <ValueAndGrowth />
            <PickACourse />
            <VideosSection />
            <StudentFeedback />
            <Faq />
        </div>
    );
};
export default SubjectsPage;
