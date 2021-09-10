import React, { useState, useEffect } from 'react';
import { data } from './data';

const Faculties = () => {
    return (
        <div className="md:w-4/5 mx-auto p-20">
            <p>Subject Faculties</p>
            <div className="p-20 md:w-4/5 mx-auto flex flex-wrap justify-start items-center">
                {(data.subjectFaculties).map(item => {
                    return (
                        <div className="border border-gray-200 m-4 rounded-md shadow-xl">
                            <div className="text-center p-10">
                                <img src="/user.svg" />
                                <p>{item.name}</p>
                            </div>
                            <hr className="bg-gray-200" />
                            <div className="flex justify-between items-center p-8">
                                <p>Rating</p>
                                <p>{item.rating}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p>Class Faculties</p>
            <div className="p-20 md:w-4/5 mx-auto flex flex-wrap justify-start items-center">
                {(data.classFaculties).map(item => {
                    return (
                        <div className="border border-gray-200 m-4 rounded-md shadow-xl">
                            <div className="text-center p-10">
                                <img src="/user.svg" />
                                <p>{item.name}</p>
                            </div>
                            <hr className="border border-gray-100" />
                            <div className="flex justify-between items-center p-8">
                                <p>Rating</p>
                                <p>{item.rating}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default Faculties;
