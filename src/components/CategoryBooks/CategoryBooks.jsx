import React, { useState } from 'react';
import SingleBooks from './SingleBooks';
import { NavLink } from 'react-router-dom';

const CategoryBooks = ({ name }) => {
    const [xbooks, setxBooks] = useState([]);
    const [booksCount,setBooksCount]=useState(0)
    useState(() => {
        fetch(`http://localhost:5000/books?subject=${name}&size=4`)
            .then(res => res.json())
            .then(data => setxBooks(data))
    }, [])



    useState(() => {
        fetch(`http://localhost:5000/bookscount?subject=${name}`)
            .then(res => res.json())
            .then(data => setBooksCount(data))
    }, [])


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