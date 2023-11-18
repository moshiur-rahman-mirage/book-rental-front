import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HelmetTitle from '../../HelmetTitle';
import SingleBooks from '../../components/CategoryBooks/SingleBooks';
const CategoryAllBooks = () => {
    const books = useLoaderData()
    const { _id, title, author, subject, publication_year, ISBN } = books


    return (
        <div>
            <HelmetTitle title="Books List" />
                 
            <h1 className='text-4xl font-semibold text-center text-neutral-content py-5 bg-base-100'>All Books {books.subject}</h1>
            <div className='flex flex-col items-center'>
                <div className='grid  gap-5 grid-cols-1 md:grid-cols-4 '>
                    {
                        books.map(book => {
                            return (
                                <SingleBooks key={book._id} book={book} />
                            )
                        })
                    }
                    </div>
                </div>
                
            </div>
            );
};

            export default CategoryAllBooks;