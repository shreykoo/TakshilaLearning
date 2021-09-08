import { data } from './data';
import { AiFillPlayCircle } from 'react-icons/ai';

const VideosSection = () => {
    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="w-full px-10 py-28 mx-auto ">
                <p className="text-3xl text-center my-2">Pick a course</p>
                <div className="p-10 mx-auto flex flex-wrap justify-center items-center">
                    {(data.learningVideos).map(item => {
                        return (
                            <div key={item.id} className="m-2 text-left p-8 rounded-md" 
                            >
                                <div
                                 style={{ 
                                    borderRadius: '12px',
                                    height: '300px',
                                    border: '1px solid black',
                                    width: '300px',
                                    backgroundColor: 'black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                >
                                    <AiFillPlayCircle color="white" size={42} />
                                </div>
                                <p className="text-xl text-left ml-2">{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};
export default VideosSection;
