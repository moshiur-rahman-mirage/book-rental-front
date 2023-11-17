import React, { useState } from 'react';
import SingleCategory from './SingleCategory';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useEffect } from 'react';

const Category = () => {
    const [xcategory,setxCategory]=useState([]);
    const axiosPublic=useAxiosPublic();
    const categoryUrl='/category'
    useEffect(()=>{

        axiosPublic.get(categoryUrl)
        .then(res=>setxCategory(res.data))
    },[categoryUrl,axiosPublic])
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