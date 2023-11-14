import axios from "axios";


const axiosSecure=axios.create({
    baseURL:'https://book-rental-back-git-main-moshiur-rahmans-projects-fe916e0b.vercel.app',
    withCredentials:false
})

const useAxiosSecure=()=>{
    return axiosSecure;
}

export default useAxiosSecure;