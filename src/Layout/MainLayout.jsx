import React from 'react';
import Headers from '../Components/Headers';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
      <div>
        <div className="">
          <Headers />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
};

export default MainLayout;