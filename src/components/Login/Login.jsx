import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <section className="">
                <div className="flex flex-col items-center justify-center px-6 mx-auto  lg:py-0">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral  md:text-2xl ">
                                Log in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" > {/*onSubmit={handleLogin} */}
                                <div>
                                    <label htmlFor="id" className="block mb-2 text-sm font-medium text-neutral ">Your University ID</label>
                                    <input type="text" name="id" id="id" className=" border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="X000000000" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border bg-transparent border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                </div>
                                <button type="submit" className="w-full text-neutral btn btn-outline bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 ">Sign in</button>
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
        </div>
    );
};

export default Login;