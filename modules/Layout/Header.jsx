const Header = () => {
    return (
        <div className="w-full bg-black px-20 py-8">
            <div className="w-4/5 m-auto flex justify-between items-center">
                <div style={{ flex: 2 }}>
                    <img src="./logo.png" alt="logo" style={{ height: '2em' }}  />
                </div>
                <div style={{ flex: 1 }} className="flex justify-around items-center text-white">
                    <p>Home</p>
                    <p>Courses</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
};
export default Header;