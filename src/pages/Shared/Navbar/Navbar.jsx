import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
const {user,logout}=useContext(AuthContext);
    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li>
            {user?.email ? <NavLink to='/booking'> My Booking</NavLink> : <></>
            }
        </li>
    </>

    
    return (
        <div className="navbar bg-base-100 h-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
              {user && user?.email}
                {
                    
                    user && user?.email ? 

                    
                    <button onClick={logout} className="btn">Logout</button> 
                    
                    :<Link to='/login' className="btn"> Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;