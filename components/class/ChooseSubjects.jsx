import { data } from './data';

const ChooseSubjects = () => {
    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="text-center px-10 py-20 mx-auto ">
                <div>
                    <p className="text-4xl my-4">Choose subjects</p>
                </div>
                <div className="p-20 mx-auto flex flex-wrap justify-center items-center">
                {(data.chooseSubjects).map(item => {
                    return (
                        <div key={item.id} className="m-2 text-left p-8 bg-white shadow-2xl" 
                            style={{ 
                                borderRadius: '12px',
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
        </div>
    );
};
export default ChooseSubjects