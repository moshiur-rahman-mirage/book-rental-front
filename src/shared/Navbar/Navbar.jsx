import { useContext } from "react";
import Switcher from "../../config/Switcher";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import useCart from "../../hooks/useCart";
 import "./Navbar.css"
const Navbar = () => {
    const { brandName, user, logout } = useContext(AuthContext)
    // const [, cart] = useCart();


    const handleSignOut = () => {
        logout()
            .then()
            .catch()
    }


    const navitem = <>
        <li><a className="hover:bg-secondary hover:text-neutral-content">Book List</a></li>
        <li><NavLink to="/about" className="hover:bg-secondary hover:text-neutral-content">About Us</NavLink></li>
        <li><NavLink to="/dashboard" className="hover:bg-secondary hover:text-neutral-content"  >Dashboard</NavLink></li>
        {/* {user && 
        <li className=""><NavLink to="/request" className="hover:bg-secondary hover:text-neutral-content">Your Requests
            <div className="badge badge-secondary hover:font-semibold hover:badge-primary ">
                <FaBookOpen />
                +{cart.length}</div>
        </NavLink></li>
} */}
    </>

    return (
        <div className="bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                                {navitem}
                            </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost text-neutral hover:bg-secondary hover:text-neutral-content normal-case text-xl">{brandName}</NavLink>

                    </div>
                    <div className="navbar-center text-neutral hidden lg:flex">
                        <ul className="menu  menu-horizontal px-1">
                            {navitem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ?
                        <>
                            <button onClick={handleSignOut} className="btn btn-primary text-neutral hover:bg-secondary hover:text-neutral-content">Sign Out</button> 
                            <p className="text-xl mx-2 text-neutral">{user.displayName}</p>
                            </>
                            :
                            <NavLink to="login" className="btn btn-primary text-neutral hover:bg-secondary hover:text-neutral-content">Login</NavLink>
                        }
                        <Switcher />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;