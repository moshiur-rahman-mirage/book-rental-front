import React from 'react';

const SingleCategory = ({cat}) => {
    const {id,name}=cat;
    return (
        <div className='flex flex-row gap-2 border'>
            {name}
        </div>
    );
};

export default SingleCategory;