import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useCart = () => {
    const axiosPublic=useAxiosPublic();
        const {refetch,data:cart=[]}=useQuery({
            queryKey:['userCart'],
            queryFn:async ()=>{
                const res = await axiosPublic.get('/carts');
                // console.log(res.data)
                return res.data;
                
            }
        })
        return [refetch,cart]
    
};

export default useCart;