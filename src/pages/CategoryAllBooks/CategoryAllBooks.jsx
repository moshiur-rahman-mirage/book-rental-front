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
const CategoryAllBooks = () => {
    const books = useLoaderData()
    const {_id,title,author,subject,publication_year,ISBN}=books
    console.log(subject)

    return (
        <div>
            <HelmetTitle title="Books List"/>
            <h1 className='text-4xl font-semibold text-center text-neutral-content py-5 bg-base-100'>All Books {books.subject}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Image</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Author</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">Publication Year</TableCell>
                            <TableCell align="right">ISBN</TableCell>
                           
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                <img src="/img/1.jpg" className="w-20 " />
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.author}</TableCell>
                                <TableCell align="right">{row.subject}</TableCell>
                                <TableCell align="right">{row.publication_year}</TableCell>
                                <TableCell align="right">{row.ISBN}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CategoryAllBooks;