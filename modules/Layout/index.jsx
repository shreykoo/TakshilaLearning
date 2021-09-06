import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="w-full">
            <Header />
            <div style={{ minHeight: '90vh' }} className="w-4/5 mx-auto p-10">
                {children}
            </div>
            <Footer />
        </div>
    );
};
export default Layout;