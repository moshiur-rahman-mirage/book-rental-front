import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider';


    const Login = () => {
        const location = useLocation();
        const navigate = useNavigate();
        const { signInUser, brand, signInWithGoogle } = useContext(AuthContext)
       
        const handleLogin = e => {
            e.preventDefault();

            const form = new FormData(e.currentTarget)
            const email = form.get('email')
            const password = form.get('password')


            signInUser(email, password)
                .then(result => {
                    toast.success('Logged In Successfully!');
                    navigate("/");

                })
                .catch(error => {
                    console.log(error)
                    if (error.code === 'auth/wrong-password') {
                        toast.error('Please check the Password');
                    }
                    if (error.code === 'auth/invalid-login-credentials') {
                        toast.error('Please check the Email');
                    }

                })


        }



        return (
            <div>
                <Navbar />
                <section className="">
                    <div className="flex flex-col text-error items-center justify-center px-6 mx-auto  lg:py-0">
                        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-error  md:text-2xl ">
                                    Log in to your account
                                </h1>
                                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" > {/*onSubmit={handleLogin} */}
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-error ">Your University ID</label>
                                        <input type="email" name="email" id="email" className=" border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="user@email.com" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-error ">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className=" border bg-transparent border-gray-300 text-error sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                    </div>
                                    <button type="submit" className="w-full text-error btn btn-outline bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 ">Sign in</button>
                                    <div>
                                        <p className="text-sm font-light ">
                                            Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 underline ">Sign up</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    };

    export default Login;