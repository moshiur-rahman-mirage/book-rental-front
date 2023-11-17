import axios from "axios";


const axiosPublic=axios.create({
    baseURL:'https://book-rental-back-git-main-moshiur-rahmans-projects-fe916e0b.vercel.app',
    withCredentials:false
})

const useAxiosPublic=()=>{
    return axiosPublic;
}

export default useAxiosPublic;