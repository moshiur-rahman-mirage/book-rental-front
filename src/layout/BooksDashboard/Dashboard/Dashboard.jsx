import React from 'react';
import MyBooks from '../MyBooks/MyBooks';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import "./Dashboard.css"
const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-primary">
                <ul className="menu p-4">
                    <li >
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content'  to="/dashboard/user">
                            <FaHome></FaHome>
                            User Update</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/dashboard/books">
                            <FaCalendar></FaCalendar>
                            Book Management</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/dashboard/statistics">
                            <FaAd></FaAd>
                            Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/dashboard/bookings">
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li>
                    <div className="divider text-4xl text-neutral divider-neutral"></div>

                    
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/">
                            <FaHome></FaHome>
                            My Books</NavLink>
                    </li>
                    <li>
                        <NavLink className='hover:bg-secondary text-neutral hover:text-neutral-content' to="/order/salad">
                            <FaSearch></FaSearch>
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