import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import Category from '../components/Category/Category';

const Main = () => {
    return (
        <div className='bg-base-100'>
            <div className='min-h-screen'>
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