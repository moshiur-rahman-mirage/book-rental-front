import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    //baseURL:'https://book-rental-back-git-main-moshiur-rahmans-projects-fe916e0b.vercel.app',
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logout } = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            logout()
            navigate('/login')


        }
        return Promise.reject(error);
    })


    return axiosSecure;
}

export default useAxiosSecure;