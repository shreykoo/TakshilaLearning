import React from 'react';
import { Courses, Links } from './data';

const Footer = () => {
    return (
        <div className="w-full bg-black p-20 text-white">
            <div className="xl:w-4/5 2xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-full xs:w-full xxs:w-full m-auto flex flex-wrap justify-between items-center">
                <div className="md:w-1/5 sm:w-full xs:w-full xxs:w-full">
                    <img src="./logo.png" alt="logo" style={{ height: '2em' }}  />
                    <br />
                    <div className="p-2">
                        <p className="text-sm font-light">
                            Takshila Learning is an online coaching platform that aims at making ‘learning’ a 
                            fascinating activity for students by broadening the scope of learning to build 
                            curiosity in the minds of our students so they always aim to test their limits & 
                            adding more value to conventional classroom lessons through our online coaching classes
                            </p>
                            <br />
                            <p className="text-sm font-light">info@takshilalearning.com</p>
                            <p className="text-sm font-light">+91-8800-999-280</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start xxs:justify-start xs:justify-start items-start">
                    <div className="mx-4">
                        <p className="font-bold">Courses</p>
                        <br />
                        {Courses.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                    <div className="mx-4">
                        <p className="font-bold">Links</p>
                        <br />
                        {Links.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                    <div className="mx-4">
                        <p className="font-bold">Latest Post</p>
                        <br />
                        <p className="font-light text-sm">French Revolution Class 9 History, <br /> Chapter 1 NotesAugust 26, 2021</p>
                        <br />
                        <p className="font-light text-sm">BHAKTI MOVEMENT | <br /> NCERT HISTORY CLASS <br />12 NOTES August 25, 2021</p>
                        <p className="font-light text-sm">CMA VS CS – Which is <br /> better? August 24, 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;