import { data } from './data';

const Growth = () => {
    return (
        <div style={{ backgroundColor: '#F8F8F8', textAlign: 'center'}} className="py-10">
            <p className="text-2xl font-bold my-2">How your kid will grow</p>
            <div className="p-10 md:w-3/5 mx-auto flex flex-wrap justify-center items-center">
                {(data.howKidWillGrow).map(item => {
                    return (
                        <div key={item.id} className="m-2 text-left p-8 bg-white" 
                            style={{ 
                                boxShadow: '19.2107px 19.2107px 7.68426px rgba(231, 231, 231, 0.4)', borderRadius: '12px',
                                height: '250px',
                                width: '250px'
                            }}
                        >
                            <img src={item.img} style={{ height: '10em'}} />
                            <p className="text-xl text-center w-5/5">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Growth;
