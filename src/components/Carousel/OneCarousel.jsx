import React from 'react';

const OneCarousel = () => {
    return (
        <div className='carousel w-full '>
            <div id="slide1" className="carousel-item relative md:h-[550px]  w-full">
                <img src="/img/1.jpg" className="w-full " />
                <div className="absolute rounded-b-md flex items-center md:w-1/2 w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12'>
                        <h2 className='md:text-6xl text-4xl font-bold'>Lets Help Each Other for Mutual Benefit</h2>
                        <p className=''>If you want to borrow a book, come here. If you want to lend a book come here.</p>
                        <div>
                            <button className="btn btn-secondary mr-5 ">Borrow The Book</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 md:bottom-0 bottom-4">
                    <a href="#slide4" className="btn btn-circle btn-secondary mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-secondary">❯</a>
                </div>
            </div>
        </div>
    );
};

export default OneCarousel;