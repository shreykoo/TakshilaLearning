import { data } from './data';


const Tests = () => {
    return (
        <div className="p-28 md:w-5/5 flex flex-wrap justify-center items-start">
            {data.map(item => {
                return (
                    <div key={item.id} style={{ width: '400px' }} className="text-center m-4 border border-gray-200 rounded-md shadow-md">
                        <p className="p-10 text-left">{item.value}</p>
                        <hr className="bg-gray-200" />
                        <p className="pt-4 font-bold">{item.name}</p>
                        <p className="pb-4 font-semibold">{item.designation}</p>
                    </div>
                )
            })}
        </div>
    );
};
export default Tests