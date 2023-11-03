import React from 'react';

const News = () => {
    return (
        <div className='grid grid-cols-5 mt-2 gap-2'>
            <div className='col-span-2 '>
                <img className='rounded-md' src='./img/4.jpg' />
            </div>
            <div className='col-span-3 flex flex-col text-error'>
                <h1 className=''>Name : Advanced Biology</h1>
                <p>Writer : A. D. Jons</p>
                <p>Edition: 17th</p>
                <p>Available : 10 min Ago</p>
            </div>
        </div>
    );
};

export default News;