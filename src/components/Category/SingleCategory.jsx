import React from 'react';
import CategoryBooks from '../CategoryBooks/CategoryBooks';
import CategoryName from '../Login/CategoryName/CategoryName';

const SingleCategory = ({cat}) => {
    const {id,name}=cat;
    return (
        <div className='flex  md:max-w-7xl mx-auto mb-5  flex-col gap-5'>
            {/* <h1 className='text-neutral-content text-center md:text-left font-bold text-4xl md:text-5xl mb-5'>{name}</h1> */}
            <CategoryName subHeading='' heading={name} />
           
            <CategoryBooks name={name}/>
           
        </div>
    );
};

export default SingleCategory;