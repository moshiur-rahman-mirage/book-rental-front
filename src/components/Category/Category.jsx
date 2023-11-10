import React, { useState } from 'react';
import SingleCategory from './SingleCategory';

const Category = () => {
    const [xcategory,setxCategory]=useState([]);
    useState(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setxCategory(data))
    },[])
    return (
        <div>
            {/* <h1 className='text-error   text-4xl   m-2 font-semibold text-center' >Books</h1> */}
            {
                xcategory.map(cat=>{
                    return(
                        <SingleCategory key={cat._id} cat={cat}/>
                    )
                })
            }
        </div>
    );
};

export default Category;