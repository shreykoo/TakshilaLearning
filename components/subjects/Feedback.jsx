import { data } from './data';
import { AiTwotoneStar, AiOutlineStar } from 'react-icons/ai';

const StudentFeedback = () => {
    return (
        <div className="p-20 w-4/5 mx-auto">
            <p className="text-2xl text-center font-bold my-2">Student Feedback</p>
            <div className="p-10 w-4/5 mx-auto flex flex-wrap justify-center items-center">
                <AiTwotoneStar size={82} />
                <AiTwotoneStar size={82} />
                <AiTwotoneStar size={82} />
                <AiTwotoneStar size={82} />
                <AiOutlineStar size={82} />
            </div>
            <p className="text-center text-5xl font-bold">4/5</p>
            <p className="text-sm font-extralight text-center my-2">Rating</p>
        </div>
    )
};
export default StudentFeedback;
