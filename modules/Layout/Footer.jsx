import React from 'react';
import { Courses, GetToKnowUs, LearnWithUs, SchoolCourses, PartnerWithUs, BookSolutions, ProfessionalCourses } from './data';
import router from 'next/router';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Button } from '@material-ui/core';


const Footer = () => {
    return (
        <div className="w-full md:p-20 xxs:p-2 xs:p-2 sm:p-2 text-white" style={{ backgroundColor: '#313C38'}}>
            <div className="xl:w-4/5 2xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-full xs:w-full xxs:w-full m-auto flex flex-wrap justify-between items-start">
                <div className="md:w-1/5 sm:w-full xs:w-full xxs:w-full">
                    <button onClick={() => router.push('/')}>
                        <img src="./logo.png" alt="logo" style={{ height: '2em' }}  />
                    </button>
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
                        <p className="font-bold">Get To Know Us</p>
                        <br />
                        {GetToKnowUs.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                    <div className="mx-4">
                        <p className="font-bold">Learn With Us</p>
                        <br />
                        {LearnWithUs.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                    <div className="mx-4">
                        <p className="font-bold">Partner With Us</p>
                        <br />
                        {PartnerWithUs.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="xl:w-4/5 2xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-full xs:w-full xxs:w-full m-auto flex flex-wrap justify-between items-start">
                <div className="md:w-1/5 sm:w-full xs:w-full xxs:w-full xxs:my-8 xs:my-8 sm:my-8">
                    <p>Connect with Us</p>
                    <div className="flex flex-wrap justify-around items-center">
                        <Button
                            color="primary"
                            startIcon={<GrFacebookOption color="white" size={22} />}
                            variant="text"
                            style={{ color: 'white'}}
                        >
                            Facebook
                        </Button>
                        <Button
                            color="primary"
                            startIcon={<AiFillLinkedin color="white" size={22} />}
                            variant="text"
                            style={{ color: 'white'}}
                        >
                            Linkedin
                        </Button>
                        <Button
                            color="primary"
                            startIcon={<AiOutlineTwitter color="white" size={22} />}
                            variant="text"
                            style={{ color: 'white'}}
                        >
                            Twitter
                        </Button>
                        <Button
                            color="primary"
                            startIcon={<AiFillYoutube color="white" size={22} />}
                            variant="text"
                            style={{ color: 'white'}}
                        >
                            Youtube
                        </Button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start xxs:justify-start xs:justify-start items-start">
                    <div className="mx-4">
                        <p className="font-bold">School Courses</p>
                        <br />
                        {SchoolCourses.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                    <div className="mx-4">
                        <p className="font-bold">NCERT Book <br /> Solutions</p>
                        <br />
                        {BookSolutions.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                    <div className="mx-4">
                        <p className="font-bold">Professional <br />Courses</p>
                        <br />
                        {ProfessionalCourses.map(item => (
                            <p key={item.id} className="my-2 text-sm font-light">{item.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;