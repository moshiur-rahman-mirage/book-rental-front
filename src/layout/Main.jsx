import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='min-h-100%'>
                <Navbar className=''/>
                <div className=''>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;