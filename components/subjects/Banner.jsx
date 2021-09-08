import { Box, Button } from '@material-ui/core';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="flex justify-between items-center w-4/5 px-10 py-28 mx-auto ">
                <div>
                    <p className="text-5xl font-semibold my-4">Your child will be fluent, <br />confident, and take <br /> center stage </p>
                    <Button 
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ textTransform: 'none'}}
                    >
                        Book Free Class 
                    </Button>
                </div>
                <div>
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};
export default Banner;
