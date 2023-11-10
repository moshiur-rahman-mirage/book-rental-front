import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Bookdetails = () => {
    const book=useLoaderData();
    const{_id}=book

    return (
        <div>
            Book Details Of {_id}
        </div>
    );
};

export default Bookdetails;