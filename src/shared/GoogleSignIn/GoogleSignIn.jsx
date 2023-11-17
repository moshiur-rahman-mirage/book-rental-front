import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            // const userInfo={
            //     email:result.user?.email,
            //     name:result.user?.displayName
            // }
            // axiosPublic.post('/users',userInfo)
            // .then(res=>{
                
            //     navigate('/')
            // })
        })
    }
    return (
        <button onClick={handleGoogleSignIn} className='btn rounded-full bg-secondary hover:bg-accent hover:text-neutral '>
            <BsGoogle className='text-xl font-bold' />
        </button>
    );
};

export default GoogleSignIn;