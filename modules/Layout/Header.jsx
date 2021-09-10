import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconButton, useMediaQuery } from '@material-ui/core';

const Header = () => {
    
    const [ show, setShow ] = useState(false);
    const matches = useMediaQuery('(max-width:800px)');

    return (
        <div className="w-full bg-black px-20 py-8">
            <div className="md:w-4/5 sm:w-full xxs:w-full xs:w-full m-auto flex justify-between items-center">
                <div style={{ flex: 2 }}>
                    <img src="./logo.png" alt="logo" style={{ height: '2em' }}  />
                </div>
                {matches ? (
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center'}}>
                        <IconButton onClick={() => setShow(!show)}>
                            <GiHamburgerMenu color="white" size={16} />
                        </IconButton>
                        {show && (
                            <div style={{
                                position: 'absolute',
                                top: '30px',
                                right: '0px',
                                zIndex:10,
                                borderRadius: '8px',
                                padding: '14px',
                            }} className="bg-gray-200">
                                <p>Home</p>
                                <p>Courses</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        )}
                    </div>
                ):
                    <div style={{ flex: 1 }} className="flex justify-around items-center text-white">
                        <p>Home</p>
                        <p>Courses</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                }
            </div>
        </div>
    );
};
export default Header;