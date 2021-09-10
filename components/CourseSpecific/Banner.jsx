const Banner = () => {
    return (
        <div style={{ backgroundColor: '#46A573'}} className="w-full px-10">
            <div className="flex flex-wrap justify-between items-center w-4/5 px-10 py-28 mx-auto ">
                <p style={{ fontSize: '56px', fontFamily: 'Manrope', fontWeight: 'bold'}}>Choose your goal</p>
                <img src="/courseBannerImg.svg" />
            </div>
        </div>
    );
};
export default Banner;
