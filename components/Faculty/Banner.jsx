import React, { useState, useEffect } from 'react';

const Banner = () => {

    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="flex flex-wrap justify-between items-center w-4/5 px-10 py-8 mx-auto ">
                <div>
                    <p className="text-5xl font-semibold my-4">Meet the mentors</p>
                </div>
                <div>
                    <img src="/mentor.svg" />
                </div>
            </div>
        </div>
    );
};
export default Banner;
