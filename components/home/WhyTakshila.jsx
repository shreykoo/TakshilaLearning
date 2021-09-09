import { data } from './data';

const WhyTakshila = () => {
    return (
        <div className="p-20 w-full text-center" style={{ backgroundColor: '#F8F8F8'}}>
            <p className="text-2xl font-bold">Why Takshila</p>
            <br />
            {/* <div className="flex justify-center items-center">
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
            </div> */}
            <div>
                <table style={{ margin: 'auto', boxShadow: '10px 10px 4.09626px rgba(0, 0, 0, 0.09)', borderCollapse: 'collapse'}}>
                    <thead style={{ border: '1px solid #eeeeee', textAlign: 'left'}}>
                        <tr >
                            <th className="p-8"></th>
                            <th className="p-8">What Society says</th>
                            <th className="p-8">What we say</th>
                        </tr>
                    </thead>
                    <tbody style={{ border: '1px solid #eeeeee'}}>
                        <tr style={{ border: '1px solid #eeeeee', textAlign: 'left'}}>
                            <td className="p-8">What is education?</td>
                            <td className="p-8">Higher marks = good college</td>
                            <td className="p-8">Concept clarity = critical thinkers and higher aptitudes</td>
                        </tr>
                        <tr style={{ border: '1px solid #eeeeee', textAlign: 'left'}}>
                            <td className="p-8">What do you want to do in life?</td>
                            <td className="p-8">Steady education = Getting a stable job = Good money</td>
                            <td className="p-8">Out of the box thinking = Creating jobs = Greater money</td>
                        </tr>
                        <tr style={{ border: '1px solid #eeeeee', textAlign: 'left'}}>
                            <td className="p-8">How do you want to live life?</td>
                            <td className="p-8">Follow the trend</td>
                            <td className="p-8">Lead your way</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default WhyTakshila;
