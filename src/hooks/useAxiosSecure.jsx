import axios from "axios";


const axiosSecure=axios.create({
    baseURL:'https://book-rental-back.vercel.app',
    withCredentials:false
})

const useAxiosSecure=()=>{
    return axiosSecure;
}

export default useAxiosSecure;