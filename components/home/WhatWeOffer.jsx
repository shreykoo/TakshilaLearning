import { data } from './data';

const WhatWeOffer = () => {
    return (
        <div className="p-20 flex justify-between items-center" style={{ backgroundColor: '#46A573'}}>
            <div className="flex justify-between items-center w-4/5 px-10 py-28 mx-auto ">
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
