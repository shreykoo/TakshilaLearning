
const Courses = () => {
    return (
        <div className="md:p-20 py-10">
            <p className="text-2xl text-center font-bold">Academic Courses</p>
            <br />
            <br />
            <div className="flex flex-wrap justify-around items-start w-4/5 md:px-10 mx-auto ">
                <div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full ">
                    <p className="text-2xl xxs:text-md xs:text-md  font-semibold">
                        Live interactive sessions, Well-explained online classes, Friendly learning environment
                    </p>
                    <p className="xxs:text-sm xs:text-sm">
                        We aim at providing well-constructed live tuition courses for CBSE, ISCE, 
                        IGSCE and International Boards for classes K-12. Our online tuitions align 
                        our vision of school education with concept clarity to prepare students for 
                        greater academic results and finer application of concepts in our day to day lives. 
                        We also promote timely completion of the curriculum for frequent revision because practise makes perfect!
                    </p>
                </div>
                <div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full border rounded-md border-gray-200 p-10 shadow-md">
                    <img src="/accademicCourses.png" style={{ height: '14rem', objectFit: 'cover'}}  />
                </div>
            </div>
            <br />
            <br />
            <p className="text-2xl text-center font-bold">Professional Courses</p>
            <br />
            <br />
            <div className="flex flex-wrap justify-around items-center w-4/5 md:px-10 mx-auto ">
                <div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full  border rounded-md border-gray-200 p-10 shadow-md">
                    <img src="/learningImg.svg" style={{ height: '14rem', objectFit: 'cover'}}  />
                </div>
                <div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full ">
                    <p className="text-2xl xxs:text-md xs:text-md font-semibold">
                        Focus on Key Learning Areas, Taught by Subject Matter Experts, Provide real-time case studies 
                    </p>
                    <p className="xxs:text-sm xs:text-sm">
                        Takshila Learning provides greatly crafted professional courses that are delivered by expert faculty in the industry, with constant assistance as needed. Our courses include live/recorded video lectures with mock tests to match the needs of each student for the courses mentioned below - 
                        Company Secretary - CSEET, CS Executive, and CS Professional
                        Chartered Accountancy - CA Foundation, CA Intermediate, and CA Final
                        Certified Management Accountant - CMA Foundation, CMA Intermediate, and CMA Final
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Courses;
