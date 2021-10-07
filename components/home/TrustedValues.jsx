import { data } from './data';

const TrustedValue = () => {
    return (
        <div style={{ backgroundColor: '#F8F8F8', textAlign: 'center'}} className="py-20">
            <p className="text-2xl font-bold my-2 px-10">At Takshila Learning, we help nurture you to your best selves. </p>
            <p className="text-sm font-light px-10">
                Select your course, buddy! We’re ready to help you study!
            </p>
            <div className="md:p-14 sm:p-8 xxs:p-8 xs:p-8 md:w-5/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.trustedSteps).map(item => {
                    return (
                        <div key={item.id} className="m-2 text-left p-8 bg-white" 
                            style={{ 
                                boxShadow: '19.2107px 19.2107px 7.68426px rgba(231, 231, 231, 0.4)', borderRadius: '12px',
                                height: '250px',
                                width: '250px'
                            }}
                        >
                            <img src={item.img} />
                            <p className="text-xl text-center">{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default TrustedValue;
