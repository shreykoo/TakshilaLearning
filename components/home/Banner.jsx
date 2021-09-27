import { Box, Button } from '@material-ui/core';


const Banner = () => {
    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="flex justify-between items-center w-4/5 px-10 py-10 mx-auto ">
                <div>
                    <p style={{ fontSize: '56px', fontFamily: 'Manrope', fontWeight: 'bold'}}>Takshila Learning</p>
                    <p className="text-3xl m-2">Rediscover Education & Rediscover Life </p>
                    <Button 
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ textTransform: 'none', margin: '10px'}}
                    >
                        Book Free Demo 
                    </Button>
                </div>
                <div>
                    <img src="/learningImg.svg" />
                </div>
            </div>
        </div>
    );
};
export default Banner;
