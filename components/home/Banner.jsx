import { Box, Button } from '@material-ui/core';


const Banner = () => {
    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="flex flex-wrap justify-between items-center w-4/5 md:px-10 py-10 mx-auto ">
                <div className="xxs:text-center xs:text-center md:text-left">
                    <p 
                        style={{ fontFamily: 'Manrope', fontWeight: 'bold'}}
                        className="md:text-5xl sm:text-2xl xxs:text-2xl xs:text-2xl m-2 xxs:text-center xs:text-center md:text-left "
                    >
                        Takshila Learning
                    </p>
                    <p className="md:text-3xl sm:text-xl xxs:text-md xs:text-xl m-2">Rediscover Education & Rediscover Life </p>
                    <Button 
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ textTransform: 'none', margin: '10px'}}
                    >
                        Book Free Demo 
                    </Button>
                </div>
                <div className="m-auto">
                    <img src="/learningImg.svg" />
                </div>
            </div>
        </div>
    );
};
export default Banner;
