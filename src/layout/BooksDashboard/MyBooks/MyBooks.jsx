import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DataTable from 'react-data-table-component';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const MyBooks = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [pending, setPending] = useState(true);
    const booksUrl = `/books?donerEmail=${user.email}`
    const { data: myDonatedBooks = [], refetch } = useQuery({
        queryKey: ['mybooks'],
        queryFn: async () => {
            const res = await axiosPublic.get(booksUrl);
            setPending(false);
            return res.data;
        }
    })

    const [records, setRecords] = useState(myDonatedBooks);
    // if (records.length < 1) {
    //     setRecords(books)
    // }

    const handleFilter = (e) => {
        console.log((e))
        const newData = books.filter(row => {
            return (
                row.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.author.toLowerCase().includes(e.target.value.toLowerCase()) ||
                row.subject.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        setRecords(newData);
    }


    const handleDeleteBooks = (name, id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/books/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `Book has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const columns = [
        {
            name: 'Sl',
            selector: (row, index) => index + 1,
            sortable: true,
            width: "80px"
        },
        {
            name: "Title",
            selector: row => row.title,
            wrap: true
        },
        {
            name: "Author",
            selector: row => row.author,
        },
        {
            name: "Subject",
            selector: row => row.subject,
        },
        {
            name: "Year",
            selector: row => row.publication_year,
            width: '100px'
        },
        // {
        //     name: "Delete",
        //     cell: (row) => (

        //         <button
        //             className="btn btn-secondary hover:btn-accent btn-xs"
        //             onClick={() => handleDeleteBooks(row.name, row._id)}
        //         >
        //             Delete
        //         </button>
        //     ),
        // }

    ]

    const conditionalRowStyles = [

        {
            when: (row) => row.index % 2 === 0,
            style: {
                backgroundColor: 'rgba(120, 0, 0, 0.05)',
            },
        },
    ];
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#4CAF50', // Set the background color of the header
                color: 'white', // Set the text color of the header
            },
        },
    };

    return (
        <>
            <div className="join text-end">
                <div>
                    <div>
                        <input onChange={handleFilter} className="input focus:outline-none input-bordered join-item" placeholder="" />
                    </div>
                </div>
                <div className="indicator">
                    <p className="btn join-item">Search Book</p>
                </div>
            </div>
            <DataTable
                title="My Donated Books"
                columns={columns}
                data={myDonatedBooks}
                searchable={true}
                searchPlaceholder="Type to search..."
                pagination
                progressPending={pending}
                progressComponent={<CustomLoader />}
                conditionalRowStyles={conditionalRowStyles}
                customStyles={customStyles}

            />
        </>
    );
};

export default MyBooks;