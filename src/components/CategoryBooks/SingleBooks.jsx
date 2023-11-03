import React from 'react';

const SingleBooks = ({ book }) => {
    const {title,author,isbn}=book
    return (
        <div >
            <div className="card w-52 h-[50vh] my-5 card-compact bg-base-100 shadow-lg">
                <figure><img src="/img/4.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-error">{title}</h2>
                    <p className='text-error'>{author}</p>
                    <p className='text-error'>{isbn}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleBooks;