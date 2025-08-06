import React from 'react';
import Headers from '../Components/Headers';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Headers />
            <Outlet />
        </div>
    );
};

export default MainLayout;