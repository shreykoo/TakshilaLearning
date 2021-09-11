import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconButton, useMediaQuery, Button } from '@material-ui/core';
import router from 'next/router';


const Header = () => {
    
    const [ show, setShow ] = useState(false);
    const matches = useMediaQuery('(max-width:800px)');

    return (
        <div className="w-full px-20 py-8 bg-black" style={{ backgroundColor: '#000000'}}>
            <div className="md:w-4/5 sm:w-full xxs:w-full xs:w-full m-auto flex justify-between items-center">
                <div style={{ flex: 2 }}>
                    <button onClick={() => router.push('/')}>
                        <img src="./logo.png" alt="logo" style={{ height: '2em' }}  />
                    </button>
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
                    <div style={{ flex: 1,  gap: '4px' }} className="flex justify-between items-center text-white">
                        <Button 
                            variant="text"
                            color="white"
                            size="large"
                            onClick={() => router.push('/')}
                            style={{ textTransform: 'none', color: 'white' }}
                        >
                            Home
                        </Button>
                        <Button 
                            variant="text"
                            color="primary"
                            size="large"
                            onClick={() => router.push('/courses')}
                            style={{ textTransform: 'none', color: 'white' }}
                        >
                            Courses
                        </Button>
                        <Button 
                            variant="text"
                            color="primary"
                            size="large"
                            onClick={() => router.push('/about')}
                            style={{ textTransform: 'none', color: 'white' }}
                        >
                            About
                        </Button>
                        <Button 
                            variant="contained"
                            color="secondary"
                            size="large"
                            style={{ textTransform: 'none', color: 'white' }}
                        >
                        Book Free Demo 
                    </Button>
                    </div>
                }
            </div>
        </div>
    );
};
export default Header;