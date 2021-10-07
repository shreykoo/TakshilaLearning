import { useState } from 'react';
import { data } from './data';
import { Card, IconButton } from '@material-ui/core';
import { GoPrimitiveDot } from 'react-icons/go';

const WhyTakshila = () => {

    const [active, setActive] = useState(1);
    const [ activeData, setActiveData ] = useState(data.whyTakshila[0])

    function setActiveState(id){
        setActive(id)
        const activeData = (data.whyTakshila).filter(item => item.id === id);
        setActiveData(activeData[0])
    }

    return (
        <div className="md:p-20 py-10 w-full text-center" style={{ backgroundColor: '#F8F8F8'}}>
            <p className="text-2xl font-bold">Why Takshila Learning?</p>
            <br />
            <br />
            <div className="xl:w-1/5 2xl:w-2/5 lg:w-2/5 md:w-3/5 sm:w-3/5 xxs:w-4/5 xs:w-4/5 mx-auto" style={{ textAlign: 'center' }}>
                <div className="p-10 border border-black rounded-xl shadow-2xl" 
                    style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent:'center',
                        minWidth: '20%', maxWidth: '600px', margin: 'auto'
                    }}
                >
                    <div className="flex justify-between items-center">
                        <p style={{ flex: 1 }}>What Society says</p>
                        <div style={{ flex: 1 }} className="rounded-xl bg-black text-white p-8">
                            <p className="text-sm">{activeData.valueTwo}</p>
                        </div>
                    </div>
                    <br />
                    <div className="flex justify-between items-center">
                        <p style={{ flex: 1 }}>What does Takshila Learning believe</p>
                        <div style={{ flex: 1 }} className="rounded-xl bg-black text-white p-8">
                            <p className="text-sm">{activeData.value}</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="flex justify-center items-center">
                    {data.whyTakshila.map(item => {
                        return (
                            <IconButton 
                                key={item.id}  
                                onClick={() => setActiveState(item.id)}
                                styles={{ borderRadius: 1000, backgroundColor: 'black', 
                                    width: '10px', height:'10px', padding: 10
                                }} 
                            >
                                <GoPrimitiveDot color={active === item.id ? 'black': 'gray'} size={24} />
                            </IconButton>
                        )
                    } )}
                </div>
            </div>
        </div>
    );
};
export default WhyTakshila;
