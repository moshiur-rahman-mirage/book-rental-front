import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BorrowBook = () => {
    const book = useLoaderData();
    const { _id } = book
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h1 className='uppercase text-center text-4xl text-neutral-content'>Create a request to borrow the book!</h1>
            <div className='flex flex-row justify-between items-center border'>

            <input type="text" placeholder="Type here" className="input input-bordered input-info  max-w-lg" />

                <div>
                    B
                </div>
            </div>
        </div>
    );
};

export default BorrowBook;