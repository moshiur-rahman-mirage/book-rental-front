import React from 'react';
import News from '../News/News';

const RecentNews = () => {
    return (
        <div className='mx-2'>
            <div className='bg-secondary text-center text-neutral  rounded-md py-5 text-4xl'>
                Recent Updates
            </div>
            <div className=''>
               <News/>
            </div>
        </div>
    );
};

export default RecentNews;