import React, { useState } from 'react';
import SingleCategory from './SingleCategory';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect } from 'react';

const Category = () => {
    const [xcategory,setxCategory]=useState([]);
    const axiosSecure=useAxiosSecure();
    const categoryUrl='/category'
    useEffect(()=>{

        axiosSecure.get(categoryUrl)
        .then(res=>setxCategory(res.data))
    },[categoryUrl,axiosSecure])
    return (
        <div>
          
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