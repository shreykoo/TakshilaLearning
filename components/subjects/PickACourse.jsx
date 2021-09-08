import { data } from './data';
import router from 'next/router';

const PickACourse = () => {
    return (
        <div style={{ textAlign: 'center'}} className="py-20">
            <p className="text-2xl font-bold my-2">Pick a course</p>
            <div className="p-20 w-4/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.pickaCourse).map(item => {
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
            <p className="text-2xl font-bold my-2">Content By Classes</p>
            <div className="p-20 w-4/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.contentByClasses).map(item => {
                    return (
                        <div 
                            key={item.id} 
                            className="m-2 text-left p-8 bg-white" 
                            onClick={() => router.push(`/class/${item.value}`)}
                            style={{ 
                                boxShadow: '19.2107px 19.2107px 7.68426px rgba(231, 231, 231, 0.4)', borderRadius: '12px',
                                height: '250px',
                                width: '250px'
                            }}
                        >
                            <p className="text-6xl text-left font-bold">{item.value}</p>
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
export default PickACourse;
