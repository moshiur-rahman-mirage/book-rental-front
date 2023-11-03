import React from 'react';
import CategoryBooks from '../CategoryBooks/CategoryBooks';

const SingleCategory = ({cat}) => {
    const {id,name}=cat;
    return (
        <div className='flex md:max-w-7xl mx-auto  flex-col gap-2'>
            <h1 className='text-error font-bold text-5xl text-secondary mb-5'>{name}</h1>
           
            <CategoryBooks name={name}/>
           
        </div>
    );
};

export default SingleCategory;