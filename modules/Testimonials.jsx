import { IoLocation } from 'react-icons/io5';
import { SiYoutubetv } from 'react-icons/si';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { data } from 'components/Testimonial/data';
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineRight } from 'react-icons/ai';

const Testimonials = () => {
    return (
        <div className="w-full px-20" style={{ backgroundColor: '#46A573'}}>
            <div className="flex flex-wrap justify-between items-center w-4/5 px-10 py-28 mx-auto ">
                <div className="flex flex-wrap md:w-3/5 mx-auto justify-between items-start">
                    <div>
                        <IoLocation color="black" size={42} className="m-auto" />
                        <p>220 Cities</p>
                    </div>
                    <div>
                        <SiYoutubetv color="black" size={42} className="m-auto" />
                        <p>10K Subscribers</p>
                    </div>
                    <div>
                        <FaUserGraduate color="black" size={42} className="m-auto" />
                        <p>22K Students</p>
                    </div>
                    <div>
                        <FaChalkboardTeacher color="black" size={42} className="m-auto" />
                        <p>100+ Teachers</p>
                    </div>
                </div>
            </div>
            <div className="md:w-4/5 mx-auto flex justify-center">
                <Carousel showThumbs={false} width={500} showStatus={false}
                >
                    <div className="mx-auto m-3 bg-black text-white">
                        <p className="text-center p-8 ">
                            Thank you very much Takshila Learning. You have proved to be the best platform for online classes for kids. 
                            My Daughter is enjoying her studies; she is very much comfortable with the content provided by you for School CBSE Class 6th. 
                            The executive explained everything to me before buying the course about your online tuition classes, she was very helpful and she made sure that I got everything on time
                        </p>
                        <hr />
                        <br />
                        <p className="text-center">POOJA NAIK (PARENTS)</p>
                        <p className="text-center">CLASS 6TH</p>
                        <br />
                    </div>
                    <div className="mx-auto m-3 bg-black text-white">
                        <p className="text-center p-8 ">
                            Hello everyone, I am Amisha Mittal. I secured AIR-26 rank in the CS Foundation exam. 
                            My first step of success is all because of the family support I had and the support and motivation 
                            I got from my online coaching classes from Takshila Learning. The institute provides expert faculties 
                            for studies and also the faculties are really motivating. 
                            Their course is totally mapped according to the ICSI module. 
                            Also, their test series are really effective for clearing exams and preparing for exams
                        </p>
                        <hr />
                        <br />
                        <p className="text-center">Amisha Mittal</p>
                        <p className="text-center">CS Foundation</p>
                        <br />
                    </div>
                    <div className="mx-auto m-3 bg-black text-white">
                        <p className="text-center p-8 ">
                            I joined Takshila Learning for online maths classes in 2019 in 12th grade. 
                            I scored 98 in my Maths board exam. Needless to say, 
                            I’ve not come across any courses with such sound teachers and great clarity. 
                            I’ve recommended these online courses to every school grader I know and 
                            I can’t thank you enough for providing such quality education. 
                            I am currently pursuing Maths honours because of the clarity of concepts 
                            I have from 12th grade, a lot of things in my under-grad course have been 
                            really easy for me when compared to my peers. Thanks a lot Takshila Learning! 
                        </p>
                        <hr />
                        <br />
                        <p className="text-center">Shreya Bagga (Maths)</p>
                        <p className="text-center">CBSE Class 12</p>
                        <br />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};
export default Testimonials;
