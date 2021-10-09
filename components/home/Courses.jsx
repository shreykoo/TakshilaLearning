
const Courses = () => {
    return (
        <div className="md:p-20 py-10">
            <p className="text-2xl text-center font-bold">Academic Courses</p>
            <br />
            <div className="flex flex-wrap justify-around items-start w-4/5 md:px-10 mx-auto ">
                <div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full my-4">
                    <b>Classes Covered</b> - K-12
                    <br />
                    <b>Boards Covered</b> - CBSE, ISCE, IGSCE, International Boards
                    <br />
                    <b>Class Highlights</b>
                    <ol className="list-disc px-8">
                        <li>Concept Clarity </li>
                        <li>Live Interactive Sessions</li>
                        <li>Well-explained online classes</li>
                        <li>Friendly Learning Environment</li>
                        <li>Greater Academic Results</li>
                        <li>Overall Personality Development</li>
                    </ol>
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
                <div className="md:w-2/5 sm:w-full xxs:w-full xs:w-full my-4">
                    <p><b>Company Secretary</b> - CSEET, CS Executive, and CS Professional</p>
                    <p><b>Chartered Accountancy</b> - CA Foundation, CA Intermediate, and CA Final</p>
                    <p><b>Certified Management Accountant</b> - CMA Foundation, CMA Intermediate, and CMA Final</p>
                    <b>Class Highlights</b>
                    <ol className="list-disc px-8">
                        <li>Focus on Key Learning Areas</li>
                        <li>Taught by Subject Matter Experts</li>
                        <li>Provide real-time case studies</li>
                        <li>Mock tests</li>
                        <li>Live/recorded video lectures</li>
                        <li>Constant assistance</li>
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default Courses;
