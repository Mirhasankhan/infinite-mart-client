import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            footerh
        </div>
    );
};

export default Layout;