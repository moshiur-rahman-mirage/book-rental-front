import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleBooks = ({ book }) => {
    const { _id, title, author, isbn, publication_year } = book
    return (
        <NavLink to={`/books/${_id}`} className='block shadow-md border'>

            <img
                alt="Art"
                src="./img/1.jpg"
                className="h-64   p-2 w-full object-cover sm:h-80 lg:h-96"
            />


            <div className='flex flex-row items-end md:items-start md:flex-col'>
            <div >
                <h3 className="mt-2 pl-2 w-64 md:w-full text-lg font-bold text-neutral-content sm:text-xl">
                    {title}
                </h3>
                <p className=" pl-2 max-w-sm text-neutral-content">
                    {author}
                </p>
            </div>
            <div>
                <p className="mb-1 md:pl-2  max-w-sm text-neutral-content">
                    Publication Year: {publication_year}
                </p>
            </div>
            </div>



        </NavLink>
    );
};

export default SingleBooks;