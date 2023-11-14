import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleBooks = ({ book }) => {
    const { _id, title, author, isbn, publication_year } = book
    return (
        <>
            <div onClick={() => document.getElementById(_id).showModal()} className=' block shadow-md border'>

                <img
                    alt="Art"
                    src="https://i.ibb.co/HNkTx8X/madalyn-cox-O7ygzp-AL4-Mc-unsplash-1.jpg"
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


            </div>
            <dialog id={_id} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box md:bg-accent bg-opacity-95">

                    <div className='grid gap-5 grid-cols-2'>
                        <div>
                            <img
                                alt="Art"
                                src="https://i.ibb.co/HNkTx8X/madalyn-cox-O7ygzp-AL4-Mc-unsplash-1.jpg"
                                className="h-48 p-2 w-full object-contain "
                            />
                        </div>
                        <div className='text-neutral'>
                            <div className='grid grid-cols-2'>
                                <div>Book Name</div>
                                <div>{title}</div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>Author</div>
                                <div>{author}</div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>Year</div>
                                <div>{publication_year}</div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div>ISBN</div>
                                <div>{isbn}</div>
                            </div>
                        </div>

                    </div>




                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-secondary">Close</button>
                        </form>
                        <button className='btn btn-secondary'>Borrow Now</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SingleBooks;