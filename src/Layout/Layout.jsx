import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            header
            <Outlet/>
            footerh
        </div>
    );
};

export default Layout;