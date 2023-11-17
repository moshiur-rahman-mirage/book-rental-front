import React from 'react';
import MyBooks from '../MyBooks/MyBooks';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaBook, FaBookOpen, FaCalendar, FaChartLine, FaHome, FaList, FaRegHourglass, FaSearch, FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';
import "./Dashboard.css"
const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-primary">
                <ul className="menu p-4">
                    <li >
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content'  to="/dashboard/user">
                            <FaUsers/>
                            User Access Update</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/dashboard/books">
                            <FaBookOpen/>
                            Book Management</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/dashboard/statistics">
                        <FaChartLine />
                            Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/dashboard/bookings">
                        <FaRegHourglass />
                            Requests</NavLink>
                    </li>
                    <div className="divider text-4xl text-neutral divider-neutral"></div>

                    
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/">
                            <FaBook/>
                            My Books</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/order/salad">
                            <FaUser/>
                            Profile Update</NavLink>
                    </li>
                </ul>
            </div>
           
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;