import { useContext } from "react";
import Switcher from "../../config/Switcher";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { brandName } = useContext(AuthContext)
    const navitem = <>
        <li><a>Book List</a></li>
        <li><a>About Us</a></li>
        <li><a>Your Books</a></li>
        <li><a>Your Requests</a></li>
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navitem}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-neutral  normal-case text-xl">{brandName}</a>
                        {console.log({brandName})}
                    </div>
                    <div className="navbar-center text-neutral hidden lg:flex">
                        <ul className="menu  menu-horizontal px-1">
                            {navitem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to="login" className="btn btn-primary text-neutral">Login</Link>
                        <Switcher />
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;