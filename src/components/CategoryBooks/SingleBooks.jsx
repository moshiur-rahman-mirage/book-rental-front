import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import ModalBooksInfo from '../../pages/CategoryAllBooks/ModalBooksInfo';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const SingleBooks = ({ book }) => {
    const navigate = useNavigate()
    const location = useLocation();
    const user = useAuth();
    const [refetch,]=useCart();
    const axiosSecure = useAxiosSecure();
    const cartUrl = '/carts'
    const { _id, title, author, isbn, publication_year, image } = book
    const handleAddToCart = book => {
        // console.log( user.user.email)
        if (user.user && user.user.email) {
            const cartItem = {
                bookId: _id,
                email: user.email,
                title,
                author,
                isbn,
                image

            }
            axiosSecure.post(cartUrl, cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${title} Inserted!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            toast.error('Please Login!');
            navigate('/login', { state: { from: location } });
        }
    }
    return (
        <>

            <div onClick={() => document.getElementById(_id).showModal()} className=' block shadow-md border'>
                <ToastContainer />
                <img
                    alt="Art"
                    src="https://i.ibb.co/HNkTx8X/madalyn-cox-O7ygzp-AL4-Mc-unsplash-1.jpg"
                    className="h-64   p-2 w-full object-cover sm:h-80 lg:h-96"
                />


                <div className='flex object-contain flex-row break-words items-end md:items-start md:flex-col'>
                    <div >
                        <h3 className="mt-2 pl-2 w-72 break-words  text-lg font-bold text-neutral-content sm:text-xl">
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
                            <ModalBooksInfo titlename='Book Name' data={title} />
                            <ModalBooksInfo titlename='Author' data={author} />
                            <ModalBooksInfo titlename='Year' data={publication_year} />
                            <ModalBooksInfo titlename='ISBN' data={isbn} />
                        </div>

                    </div>




                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-secondary">Close</button>
                        </form>
                        <Link to={`/borrowbook/${_id}`} className='btn btn-secondary'>Borrow Now</Link>
                        {/* onClick={() => handleAddToCart(book)} */}
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default SingleBooks;