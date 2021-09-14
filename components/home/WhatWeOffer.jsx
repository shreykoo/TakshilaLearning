import { data } from './data';

const WhatWeOffer = () => {
    return (
        <div className="md:p-20 sm:p-2 xs:p-2 xxs:p-2 flex justify-between items-center" style={{ backgroundColor: '#46A573'}}>
            <div className="flex flex-wrap justify-between items-center md:w-4/5 sm:w-full xs:w-full xxs:w-full px-10 py-28 mx-auto ">
                <p className="text-6xl font-bold">What do we <br />offer</p>
                <div>
                    {(data.whatWeOffer).map(item => {
                        return (
                            <p key={item.id} className="text-xl my-2">{item.value}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default WhatWeOffer;
