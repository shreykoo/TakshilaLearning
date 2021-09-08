import { data } from './data';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { AiOutlinePlus } from 'react-icons/ai';

const Faq = () => {
    return (
        <div className="w-full px-10">
            <div className="w-full px-10 py-28 mx-auto ">
                <p className="text-3xl text-center my-2">Frequently Asked Question</p>
                <div className="p-10 mx-auto flex flex-wrap justify-center items-center">
                {(data.faq).map(item => {
                    return (
                        <Accordion 
                            key={item.id}
                            style={{ 
                                boxShadow: 'none', 
                                maxWidth: '50vw', 
                                margin: '10px',
                                padding: '10px',
                                borderRadius: '12px',
                                border: '1px solid #eeeeee'
                            }}
                        >
                            <AccordionSummary
                                // expandIcon={<AiOutlinePlus />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                
                                >
                                <p className="text-md font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </AccordionSummary>
                            <AccordionDetails
                                style={{ border: 'none'}}
                            >
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
                </div>
            </div>
        </div>
    )
};
export default Faq;
