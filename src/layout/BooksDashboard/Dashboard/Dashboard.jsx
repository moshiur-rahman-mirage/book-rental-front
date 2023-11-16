import React from 'react';
import MyBooks from '../MyBooks/MyBooks';
import { Link, Outlet } from 'react-router-dom';
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <div className="w-64 min-h-screen bg-primary">
                <ul className="menu p-4">
                    <li >
                        <Link className='hover:bg-secondary hover:text-neutral-content'  to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-secondary hover:text-neutral-content' to="/dashboard/reservation">
                            <FaCalendar></FaCalendar>
                            Reservation</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-secondary hover:text-neutral-content' to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart </Link>
                    </li>
                    <li>
                        <Link className='hover:bg-secondary hover:text-neutral-content' to="/dashboard/review">
                            <FaAd></FaAd>
                            Add a Review</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-secondary hover:text-neutral-content' to="/dashboard/bookings">
                            <FaList></FaList>
                            My Bookings</Link>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <Link className='hover:bg-secondary hover:text-neutral-content' to="/">
                            <FaHome></FaHome>
                            Home</Link>
                    </li>
                    <li>
                        <Link className='hover:bg-secondary hover:text-neutral-content' to="/order/salad">
                            <FaSearch></FaSearch>
                            Menu</Link>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;