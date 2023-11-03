import React, { useState } from 'react';
import SingleBooks from './SingleBooks';

const CategoryBooks = ({ name }) => {
    const [xbooks, setxBooks] = useState([]);
    useState(() => {
        fetch(`http://localhost:5000/books?subject=${name}`)
            .then(res => res.json())
            .then(data => setxBooks(data))
    }, [])


    return (
        <div className='grid grid-cols-5'>
             {
                xbooks.map(book=>{
                    return(
                        <SingleBooks key={book._id} book={book}/>
                    )
                })
            }
        </div>
    );
};

export default CategoryBooks;