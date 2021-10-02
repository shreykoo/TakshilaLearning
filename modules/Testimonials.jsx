import { useState } from 'react';
import { IoLocation } from 'react-icons/io5';
import { SiYoutubetv } from 'react-icons/si';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import { data } from 'components/Testimonial/data';
import { Carousel } from 'react-responsive-carousel';
import { AiFillYoutube } from 'react-icons/ai';
import { Card, IconButton } from '@material-ui/core';
import { useEffect } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

const Testimonials = () => {
    
    const [active, setActive] = useState(0);
    const [ activeData, setActiveData ] = useState(data[0])

    function setActiveState(id){
        setActive(id)
        const activeData = data.filter(item => item.id === id);
        setActiveData(activeData[0])
    }

    return (
        <div className="w-full md:p-20 sm:p-5" style={{ backgroundColor: '#46A573'}}>
            <div className="flex flex-wrap justify-between items-center w-4/5 px-10 py-28 mx-auto ">
                <div className="flex flex-wrap md:w-3/5 mx-auto justify-between items-start">
                    <div>
                        <IoLocation color="black" size={42} className="m-auto" />
                        <p>220 Cities</p>
                    </div>
                    <div>
                        <AiFillYoutube color="black" size={42} className="m-auto" />
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
            <div className="xl:w-1/5 2xl:w-2/5 lg:w-2/5 md:w-3/5 sm:w-3/5 xxs:w-4/5 xs:w-4/5 mx-auto" style={{ textAlign: 'center' }}>
                <Card>
                    <div className="p-8 bg-black text-white border-none" 
                    >
                        <div style={{ minHeight: '250px'}}>
                            <p>{activeData.value}</p>
                        </div>
                       <hr />
                       <br />
                       <p>
                        {activeData.name}
                       </p>
                       <p>
                        {activeData.designation}
                       </p>
                    </div>
                </Card>
                <br />
                <div className="flex justify-center items-center">
                    {data.map(item => {
                        return (
                            <IconButton 
                                key={item.id}  
                                onClick={() => setActiveState(item.id)}
                                styles={{ borderRadius: 1000, backgroundColor: 'black', 
                                    width: '10px', height:'10px', padding: 10
                                }} 
                            >
                                <GoPrimitiveDot color="primay" size={18} />
                            </IconButton>
                        )
                    } )}
                </div>
            </div>
        </div>
    );
};
export default Testimonials;
