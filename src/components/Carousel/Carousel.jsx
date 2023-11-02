import React from 'react';
import Login from '../Login/Login';
import LazyResult from 'postcss/lib/lazy-result';
import './carousel.css'
const Carousel = () => {
    return (

        <div id="#hero1" className=" bg-gradient-to-b from-black to-slate-950 hero min-h-[100vh] mt-[-75px] md:flex grid grid-cols-1 items-center" style={{ backgroundImage: 'url(/img/li.jpg)' }}>
            
            <div className=" hero-content md:w-1/2">
                <div className='text-white space-y-7 pl-12'>
                    <h2 className='md:text-6xl text-3xl font-bold'>Book Exchange Service</h2>
                    <p>You Can Register Your Book And Also You Can Get Book For Free With Small Monthly Fee.</p>
                    <div>
                        <button className="btn btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>

            </div>


            <div className=" md:block hidden hero-content pl-8 mx-auto">
                <Login/>

            </div>





            {/* <div className="hero min-h-[100vh] mt-[-75px]" style={{ backgroundImage: 'url(/img/library.jpg)' }}>
<div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
    <div className='text-white space-y-7 pl-12 w-1/2'>
        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
            <button className="btn btn-primary mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    </div>
</div> */}


        </div>
    );
};

export default Carousel;