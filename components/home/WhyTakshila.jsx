import { data } from './data';

const WhyTakshila = () => {
    return (
        <div className="p-20 w-full text-center" style={{ backgroundColor: '#F8F8F8'}}>
            <p className="text-2xl font-bold">Why Takshila</p>
            <br />
            <div className="flex justify-center items-center">
                {(data.whyTakshila).map(item => {
                    return (
                        <div key={item.id} className="w-1/5 m-16 text-left p-8 bg-white" 
                            style={{ 
                                boxShadow: '19.2107px 19.2107px 7.68426px rgba(231, 231, 231, 0.4)', borderRadius: '12px',
                                minHeight: '300px'
                            }}
                        >
                            <p className="text-6xl text-left font-bold">{item.id}</p>
                            <br />
                            <br />
                            <p className="text-2xl font-bold my-2">{item.heading}</p>
                            <p className="text-base">{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default WhyTakshila;
