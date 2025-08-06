import React from "react";
import { Link, NavLink } from "react-router";
import './Headers.css'
const Headers = () => {
  return (
    <div className="navbar bg-[#8DBCC7] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a>About</a>
             
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 raleway text-sm">
          <li>
            <NavLink to={'/'} className="">Home</NavLink>
          </li>
          <li>
              <NavLink to={'/about'}>About Us</NavLink>       
          </li>
          <li>
            <NavLink to={'/findroommate'}>Find Roommate</NavLink>
          </li>
          <li>
            <NavLink to={'/mylist'}>My List</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <Link to={'/signup'} className="bg-[#436285] px-4 text-white py-1 rounded-xl rancho ">SignUp</Link>
        <Link to={'/login'} className="bg-green-400 px-4 text-white py-1 rounded-xl rancho">Login</Link>
      </div>
    </div>
  );
};

export default Headers;
