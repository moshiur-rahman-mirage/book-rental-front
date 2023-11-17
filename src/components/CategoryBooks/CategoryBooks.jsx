import React, { useState } from 'react';
import SingleBooks from './SingleBooks';
import { NavLink } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import { useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';

const CategoryBooks = ({ name }) => {
    const [xbooks, setxBooks] = useState([]);
    const { loading } = useContext(AuthContext);
    const [booksCount,setBooksCount]=useState(0)
    const axiosPublic=useAxiosPublic();

    const bookUrl=`/books?subject=${name}&size=4`
    const countUrl=`/bookscount?subject=${name}`
  
    useEffect(() => {
        axiosPublic.get(bookUrl)
        .then(res=>setxBooks(res.data))
    }, [bookUrl,axiosPublic])



    useEffect(() => {
        axiosPublic.get(countUrl)
        .then(res=>setBooksCount(res.data))
    }, [countUrl,axiosPublic])


    return (
        <div className=''>
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
           
           <NavLink to={`/categoryallbooks/${name}`} className=' text-right btn my-5 btn-secondary border text-neutral-content'>Show More {name} Books</NavLink>
           }   
          
               
           
            
        </div>
    );
};

export default CategoryBooks;