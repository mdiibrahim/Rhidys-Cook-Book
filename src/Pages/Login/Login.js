import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';

import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    const { logIn, setToaster: setSpinner, registerWithGoogle, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                if (user.uid) {
                    toast('Good Job!', {
                        icon: '👏',
                    });
                    setUser(user);
                    navigate(from, { replace: true });
                }
            })
            .catch(error => console.log(error))
            .finally(() => setSpinner(false));

    }


    const handleRegisterWithGoogle = () => {
        registerWithGoogle()
            .then(result => {

                const user = result.user;
                if (user.uid) {
                    toast('Good Job!', {
                        icon: '👏',
                    });
                    setUser(user);
                    navigate(from, { replace: true });
                }
                else {
                    toast.error("User not found");
                }


            })
            .catch(error => console.log(error))
            .finally(() => setSpinner(false));
    }

    return (
        <div>
            <div className="hero mx-auto my-20 w-9/12 bg-zinc-500">
                <div className="hero-content flex-col-reverse   lg:justify-between">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" className="input input-bordered" name='email' required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="Enter your password" className="input input-bordered" name='password' required />
                                    <label className="label">
                                        <small>Not registered? <Link to='/register' className="link link-accent">Sign Up</Link> </small>
                                    </label>



                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn  btn-outline">Sign In</button>
                                </div>
                            </form>
                            <div className="form-control mt-1">
                                <button onClick={handleRegisterWithGoogle} className="btn  btn-outline btn-success"><FcGoogle className='text-2xl mr-2' /> Sign In with Google</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold ">Log in <br /><strong className='text-xl font-bold'>Rhidys Cook Book</strong></h1>
                        <p className="py-6">Eat, Bite & Sleep</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;