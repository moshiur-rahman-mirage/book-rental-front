import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import useAxiosPublic from '../../../hooks/useAxiosPublic';



const User = () => {
    const columns = [
        {
            name: "name",
            selector: row => row.name,
        },
        {
            name: "email",
            selector: row => row.email,
        }
    ]
    const axiosPublic = useAxiosPublic();
    const [users, setUsers] = useState([])
    const userUrl = '/users'
    useEffect(() => {

        axiosPublic.get(userUrl)
            .then(res => setUsers(res.data))
    }, [userUrl, axiosPublic])

    console.log(users)

    return (

        <DataTable
            title="User List"
            columns={columns}
            data={users}
            searchable={true}
            searchPlaceholder="Type to search..."
            paginationResetDefaultPage={true}
        />
    );
};

export default User;