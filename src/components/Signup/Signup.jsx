import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { BsGithub, BsGoogle } from "react-icons/bs";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import GoogleSignIn from '../../shared/GoogleSignIn/GoogleSignIn';
const Signup = () => {

    const { user, createUser, brand, logout, updateUserProfile } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((userCredential) => {
                updateUserProfile(data.name, data.photoUrl).then(() => {

                })

                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                       
                    });
            })
            .then(result => {
                const userInfo = {
                    email: data.email,
                    name: data.name
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {

                        // navigate('/')
                    })
            })
    }

    return (
        <div>
            <ToastContainer />
            <section className="bg-[url('/img/login-cover.jpg')] object-cover bg-no-repeat flex items-center h-[600px] ">

                <div className="flex rounded-lg opacity-90 border bg-primary flex-col  text-neutral items-center justify-center px-6 mx-auto  lg:py-0">
                    <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
                        <h1 style={{ textAlign: `${user}` ? 'left' : 'right' }} className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                            {
                                user ? "Registration Succesful! Login Now!" : "Signup For New Account"
                            }
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>

                                <input type="text" {...register("name")} name="name" id="name" className=" border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your Name" required="" />
                            </div>
                            <div>

                                <input type="email" {...register("email")} name="email" id="email" className=" border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                            </div>
                            <div>

                                <input type="photoUrl" {...register("photoUrl")} name="photoUrl" id="photoUrl" className=" border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Photo URL" required="" />
                            </div>
                            <div>

                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} id="password" placeholder="••••••••" className=" border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <button type="submit" className="w-full btn btn-ghost bg-secondary text-neutral-content hover:bg-accent hover:text-neutral focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                            <div className='mx-auto flex items-end '>
                                <div className='flex items-end gap-5  flex-row text-3xl '>
                                    <GoogleSignIn/>
                                    <div className='btn rounded-full bg-secondary hover:bg-accent hover:text-neutral '>
                                        <BsGithub className='text-xl font-bold' />
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                            </p>
                        </form>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Signup;