import React, { useState, useEffect } from 'react';
import router from 'next/router';

const Banner = () => {
    
    const [id, setId] = useState(null);
    useEffect(() => {
        setId(router.query.id)
    }, [ id ]);

    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="flex justify-between items-center w-4/5 px-10 py-28 mx-auto ">
                <div>
                    <p className="text-5xl font-semibold my-4">Class {id}</p>
                </div>
            </div>
        </div>
    );
};
export default Banner;
