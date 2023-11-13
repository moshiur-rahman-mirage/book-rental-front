import React, { useState } from 'react';
import SingleBooks from './SingleBooks';
import { NavLink } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import axios from 'axios';
import { useEffect } from 'react';

const CategoryBooks = ({ name }) => {
    const [xbooks, setxBooks] = useState([]);
    const [booksCount,setBooksCount]=useState(0)
    const axiosSecure=useAxiosSecure();

    const bookUrl=`/books?subject=${name}&size=4`
    const countUrl=`/bookscount?subject=${name}`
  
    useEffect(() => {
        axiosSecure.get(bookUrl)
        .then(res=>setxBooks(res.data))
    }, [bookUrl,axiosSecure])



    useEffect(() => {
        axiosSecure.get(countUrl)
        .then(res=>setBooksCount(res.data))
    }, [countUrl,axiosSecure])


    return (
        <div className='flex flex-col items-center'>
        <div className='grid  gap-5 grid-cols-1 md:grid-cols-4 '>
             {
                xbooks.map(book=>{
                    return(
                        <SingleBooks key={book._id} book={book}/>
                    )
                })
            }
           
           </div>
           {booksCount.count>4 && 
           
           <NavLink to={`/categoryallbooks/${name}`} className=' btn my-5 btn-secondary text-neutral-content'>Show More {name} Books</NavLink>
           }   
          
               
           
            
        </div>
    );
};

export default CategoryBooks;