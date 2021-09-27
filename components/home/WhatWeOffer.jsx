import { data } from './data';

const WhatWeOffer = () => {
    return (
        <div className="flex justify-between items-center" style={{ backgroundColor: '#46A573', maxWidth: '100vw'}}>
            <div className="px-20 py-28 mx-auto ">
                <p className="text-6xl font-bold text-center">What do we offer</p>
                <br />
                <div className="w-full flex justify-between items-start overflow-scroll">
                    {(data.whatWeOffer).map(item => {
                        return (
                            <p 
                                key={item.id} 
                                className="text-xl p-4 bg-white rounded-xl m-2"
                                style={{ minHeight: '80px', width: '300px', textAlign: 'center'}}
                            >
                                    {item.value}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default WhatWeOffer;
