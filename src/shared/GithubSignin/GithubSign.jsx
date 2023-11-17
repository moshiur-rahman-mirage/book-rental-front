import React from 'react';
import { BsGithub } from 'react-icons/bs';

const GithubSign = () => {

    const handleGithub=()=>{
        
    }

    return (
        <button onClick={handleGithub} className='btn rounded-full bg-secondary hover:bg-accent hover:text-neutral '>
            <BsGithub className='text-xl font-bold' />
        </button>
    );
};

export default GithubSign;