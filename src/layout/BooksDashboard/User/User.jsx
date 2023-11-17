import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import CustomLoader from '../../../shared/CustomLoader/CustomLoader';



const User = () => {
    const axiosPublic = useAxiosPublic();
    const [pending, setPending] = useState(true);
    const userUrl = '/users'

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get(userUrl);
            setPending(false);
            return res.data;
        }
    })

    const [records, setRecords] = useState(users);
    console.log(records)
    // if(records.length<1){
    //     setRecords(users)
    // }

    const handleMakeAdmin = (name, _id) => {
        axiosPublic.patch(`/users/admin/${_id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    const handleDeleteUser = (name, id) => {
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

                axiosPublic.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${name} has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    const handleFilter = (e) => {
        console.log((e))
        const newData = users.filter(row => {
            return row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(newData);
    }


    const columns = [

        {
            name: 'Sl',
            selector: (row, index) => index + 1,
            sortable: true,
            width: "80px"
        },
        {
            name: "Name",
            selector: row => row.name,

        },
        {
            name: "Email Address",
            selector: row => row.email,
        },
        {
            name: "Make Admin",
            cell: (row) => (
                row.role === 'admin' ? <h1 className=''>Admin </h1> :
                    <button
                        className="btn btn-secondary hover:btn-accent btn-xs"
                        onClick={() => handleMakeAdmin(row.name, row._id)}
                    >
                        Make Admin
                    </button>
            ),
        },
        {
            name: "Delete",
            cell: (row) => (

                <button
                    className="btn btn-secondary hover:btn-accent btn-xs"
                    onClick={() => handleDeleteUser(row.name, row._id)}
                >
                    Delete
                </button>
            ),
        }

    ]

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
                    <p className="btn join-item">Search User</p>
                </div>
            </div>
            <div style={{backgroundColor:'#555555'}}>
                <DataTable
                    title="User List"
                    columns={columns}
                    data={users}
                    searchable={true}
                    searchPlaceholder="Type to search..."
                    pagination
                    progressPending={pending}
                    progressComponent={<CustomLoader />}
                    customStyles={customStyles}

                />
            </div>
        </>
    );
};

export default User;