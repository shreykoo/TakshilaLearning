import { data } from './data';

const TrustedValue = () => {
    return (
        <div style={{ backgroundColor: '#F8F8F8', textAlign: 'center'}} className="py-20">
            <p className="text-2xl font-bold my-2">Most Trusted Online Education Portal – Takshila Learning</p>
            <p className="text-sm font-light">
                Learn from more than 200 courses at the comfort of sitting at your home. 
                Select your courses and start studying Now!
            </p>
            <div className="p-20 w-3/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.trustedSteps).map(item => {
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
                            <p className="text-xl text-left w-5/5">{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default TrustedValue;
