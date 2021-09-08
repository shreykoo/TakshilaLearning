import React, { useState, useEffect } from 'react';
import { data } from './data';
import router from 'next/router';

const Introduction = ({ className }) => {

    const [id, setId] = useState(null);

    useEffect(() => {
        setId(router.query.id)
    }, []);

    function getIntroData(){
        if(id === 12) return data.class12
        else if(id ===11) return data.class11
        else if(id === 10)return data.class10
        else if(1<= id <=6) return data.class1to6
        else if(7<=id<=9) return data.class7to9Intro
    }

    return (
        <div className="w-full px-10">
            <div className="flex justify-between items-center w-4/5 px-10 py-28 mx-auto ">
                <div>
                    <p className="text-2xl font-semibold my-4">Class Intro {className}</p>
                    <p>{getIntroData()}</p>
                </div>
            </div>
        </div>
    );
};
export default Introduction;
