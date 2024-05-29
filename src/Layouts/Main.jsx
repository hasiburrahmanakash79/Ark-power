import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='md:mt-24 mt-20 container mx-auto p-3'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;