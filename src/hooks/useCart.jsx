import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {
    const {user}=useAuth();

    const axiosSecure=useAxiosSecure();
        const {refetch,data:cart=[]}=useQuery({
            queryKey:['userCart'],
            queryFn:async ()=>{
                const res = await axiosSecure.get('/carts');
                return res.data;
                
            }
        })
        return [refetch,cart]
    
    
};

export default useCart;