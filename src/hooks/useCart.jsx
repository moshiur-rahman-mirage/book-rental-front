import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const axiosSecure=useAxiosSecure();
        const {refetch,data:cart=[]}=useQuery({
            queryKey:['userCart'],
            queryFn:async ()=>{
                const res = await axiosSecure.get('/carts');
                // console.log(res.data)
                return res.data;
                
            }
        })
        return [refetch,cart]
    
};

export default useCart;