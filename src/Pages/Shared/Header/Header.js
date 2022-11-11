import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Header = () => {

    const { user, logOut, setUser } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                setUser(null);
            })
            .catch(error => console.log(error))
    }
    return (
        <nav>

            <nav className="navbar bg-black text-white shadow-xl">
                <nav className="navbar-start">
                    <nav className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-6 shadow bg-black text-white rounded-box w-48">
                            <>
                                {
                                    user?.uid ?
                                        <nav>
                                            <Link className='mb-3 block' to='/services'>Services</Link>
                                            <Link className='mb-3 block' to='/blogs'>Blogs</Link>
                                            <Link className='mb-3 block' to='/my-reviews'>My Reviews</Link>
                                            <Link className='mb-3 block' to='/add-services'>Add Services</Link>
                                        </nav>
                                        :
                                        <nav>

                                            <Link className='mb-3 block' to='/services'>Services</Link>
                                            <Link className='mb-3 block' to='/blogs'>Blogs</Link>
                                        </nav>
                                }
                            </>


                            <nav >
                                {
                                    user?.uid ?
                                        <nav className='items-center justify-center' >
                                            <Link className="btn  btn-outline btn-accent mr-2" onClick={handleLogOut}>Sign Out</Link>

                                            <img src={user?.photoURL} alt="" className='rounded-full w-12 ' />

                                        </nav>

                                        :
                                        <nav>
                                            <Link className="btn  btn-outline btn-accent mb-2" to='/login'>Log In</Link>
                                            <Link className="btn  btn-outline btn-accent" to='/signup'>Sign Up</Link>
                                        </nav>

                                }
                            </nav>
                        </ul>
                    </nav>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl"><img src="logo.png" className='w-8 mr-1 rounded-xl' alt="" />Rhidy's Cook Book</Link>
                </nav>
                <nav className="navbar-center hidden xl:grid grid-cols-1 ">
                    <>
                        {
                            user?.uid ?
                                <nav>
                                    <Link className='mb-3 mr-5' to='/services'>Services</Link>
                                    <Link className='mb-3 mr-5' to='/blogs'>Blogs</Link>
                                    <Link className='mb-3 mr-5' to='/my-reviews'>My Reviews</Link>
                                    <Link className='mb-3' to='/add-services'>Add Services</Link>
                                </nav>
                                :
                                <nav>

                                    <Link className='mb-3 mr-5' to='/services'>Services</Link>
                                    <Link className='mb-3' to='/blogs'>Blogs</Link>
                                </nav>
                        }
                    </>
                </nav>
                <nav className="navbar-end  hidden lg:flex">
                    <nav>
                        {
                            user?.uid ?
                                <nav >
                                    <Link className="btn  btn-outline btn-accent mr-2" onClick={handleLogOut}>Sign Out</Link>
                                    <Link><img src={user?.photoURL} alt="" className='rounded-full w-12 inline ml-1' /></Link>

                                </nav>

                                :
                                <nav>
                                    <Link className="btn  btn-outline btn-accent mr-2" to='/login'>Log In</Link>
                                    <Link className="btn  btn-outline btn-accent" to='/signup'>Sign Up</Link>
                                </nav>

                        }
                    </nav>

                </nav>
            </nav>
        </nav>


    );
}


export default Header;