import { Button, FilledInput, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const Donate = () => {
    const axiosPublic = useAxiosPublic();
    const {user}=useAuth();
    const categoryUrl = '/category'
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get(categoryUrl);
            // console.log(res)
            return res.data;
        }
    })

console.log(user)
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publication_year: '',
        subject: '',
        photo: '',
        isbn: '',
        donerEmail: user.email

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
       
            Swal.fire({
                title: "Are you sure?",
                text: "Do You really want to donate?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    axiosPublic.post('/books',formData)
                        .then(res => {
                            console.log(res.data.insertedId)
                            if (res.data.acknowledged === true) {
                                Swal.fire({
                                    title: "Donated!",
                                    text: `Book has been Inserted.`,
                                    icon: "success"
                                });
                            }
                        })
                }
            });
     
    };


    console.log(categories)

    return (

        <div className='container flex items-end justify-between border h-screen'>
            <div className='left w-1/2 p-2 h-full '>
                <h1 className='text-center py-5 text-2xl uppercase mx-auto w-full'>Input Necessary Information</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Book Name"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Author Name"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-simple-select-helper-label">Subject</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={formData.selectedOption}
                                onChange={handleChange}
                                label="Subject"
                                name="subject"
                                fullWidth
                            >
                                {categories.map((category) => (
                                    <MenuItem
                                        key={category._id}
                                        value={category.name}

                                    >
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="Publication Year"
                            name="publication_year"
                            value={formData.publication_year}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='secondary'
                            label="ISBN"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Stack>
                    <TextField
                        type="url"
                        variant='outlined'
                        color='primary'
                        label="Image URL"
                        name="photo"
                        value={formData.photo}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <button type='submit' className='btn  mb-2 btn-outline w-full rounded-sm hover:bg-secondary hover:text-neutral-content'>
                        Submit
                    </button>
                </form>

            </div>
            <div className='right border-red-100'>
                Right
            </div>
        </div>
    );
};

export default Donate;