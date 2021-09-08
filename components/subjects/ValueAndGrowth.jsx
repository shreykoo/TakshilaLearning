import { data } from './data';

const ValueAndGrowth = () => {
    return (
        <div style={{ backgroundColor: '#F8F8F8', textAlign: 'center'}} className="py-20">
            <p className="text-2xl font-bold my-2">How your kid will grow</p>
            <div className="p-20 w-3/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.howKidWillGrow).map(item => {
                    return (
                        <div key={item.id} className="m-2 text-left p-8 bg-white" 
                            style={{ 
                                boxShadow: '19.2107px 19.2107px 7.68426px rgba(231, 231, 231, 0.4)', borderRadius: '12px',
                                height: '250px',
                                width: '250px'
                            }}
                        >
                            <p className="text-6xl text-left font-bold">{item.id}</p>
                            <br />
                            <br />
                            <p className="text-xl text-left w-5/5">{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <br />
            <p className="text-2xl font-bold my-2">What help do we provide</p>
            <div className="p-20 w-3/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.WhatHelpWeProvide).map(item => {
                    return (
                        <div key={item.id} className="m-2 text-left p-8 bg-white" 
                            style={{ 
                                boxShadow: '19.2107px 19.2107px 7.68426px rgba(231, 231, 231, 0.4)', borderRadius: '12px',
                                height: '250px',
                                width: '250px'
                            }}
                        >
                            <p className="text-6xl text-left font-bold">{item.id}</p>
                            <br />
                            <br />
                            <p className="text-xl text-left w-5/5">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default ValueAndGrowth;
