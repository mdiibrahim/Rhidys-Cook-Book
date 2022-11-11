import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { useTitle } from '../TitleHooks/useTitle';


const SignUp = () => {
    //for title
    useTitle('Join-Our-Home')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {
        createUser, profileUpdate, registerWithGoogle, setUser, setSpinner
    } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        const fullName = form.fullName.value;
        createUser(email, password)
            .then(result => {
                form.reset('');
                toast('Good Job!', {
                        icon: '👏',
                })
                setUser(result.user);
                handleProfileUpdate(photoURL, fullName);
            })
            .catch(error => console.log(error))
            .finally(() => setSpinner(false));
            
    }
    const handleProfileUpdate = (photoURL, fullName) => {
        const profile = {
            displayName: fullName,
            photoURL: photoURL
        }
        profileUpdate(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }
   
    const handleRegisterWithGoogle = () => {
        registerWithGoogle()
            .then(result => {

                const user = result.user;
                console.log(user.uid)
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
            <div className="hero mx-auto my-20 w-9/12 bg-zinc-300">
                <div className="hero-content flex-col-reverse  lg:justify-between">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your Full Name" className="input input-bordered" name='fullName' required />
                                </div>

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

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="Your profile pic URL" className="input input-bordered" name='photoURL' required />
                                    <label className="label">
                                        <small>Have an account? <Link to='/login' className='link link-accent'>Sign In</Link> </small>
                                    </label>
                                    <div className="form-control mt-6">
                                        <button className="btn  btn-outline">Sign up</button>
                                    </div>
                                </div>
                            </form>


                            <div className="form-control mt-1">
                                <button onClick={handleRegisterWithGoogle} className="btn  btn-outline btn-success"><FcGoogle className='text-2xl mr-2' /> Sign Up with Google</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold ">Sign Up <br /><strong className='text-3xl font-medium'>Rhidys Cook Book</strong></h1>
                        <p className="py-4">Eat, Bite & Sleep</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;