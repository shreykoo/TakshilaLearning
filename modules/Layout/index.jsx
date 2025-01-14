import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="w-full">
            <Header />
            <div style={{ minHeight: '90vh', marginTop: 40 }}>
                {children}
            </div>
            <Footer />
        </div>
    );
};
export default Layout;