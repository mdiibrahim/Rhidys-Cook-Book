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

            <nav className="navbar bg-base-300 shadow-xl">
                <nav className="navbar-start">
                    <nav className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-6 shadow bg-base-100 rounded-box w-52">
                            <Link className='mb-3' to='/services'>Services</Link>
                            <Link className='mb-3' to='/blogs'>Blogs</Link>


                            <nav >
                                {
                                    user?.uid ?
                                        <nav className='items-center justify-center' >
                                            <Link className="btn  btn-outline mr-2" onClick={handleLogOut}>Sign Out</Link>
                                            
                                                <img src={user?.photoURL} alt="" className='rounded-full w-12 ' />
                                            
                                        </nav>

                                        :
                                        <nav>
                                            <Link className="btn  btn-outline mr-2" to='/login'>Log In</Link>
                                            <Link className="btn  btn-outline" to='/signup'>Sign Up</Link>
                                        </nav>

                                }
                            </nav>
                        </ul>
                    </nav>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl"><img src="logo.png" className='w-8 mr-1 rounded-xl' alt="" />Rhidy's Cook Book</Link>
                </nav>
                <nav className="navbar-center hidden lg:grid grid-cols-3">
                    <Link className='mx-auto btn btn-ghost normal-case  text-xl' to='/services'>Services</Link>
                    <Link className='mx-auto btn btn-ghost normal-case  text-xl' to='/blogs'>Blogs</Link>
                </nav>
                <nav className="navbar-end  hidden lg:flex">
                    <nav>
                        {
                            user?.uid ?
                                <nav >
                                    <Link className="btn  btn-outline mr-2" onClick={handleLogOut}>Sign Out</Link>
                                    <img src={user?.photoURL} alt="" className='rounded-full w-12 ' />

                                </nav>

                                :
                                <nav>
                                    <Link className="btn  btn-outline mr-2" to='/login'>Log In</Link>
                                    <Link className="btn  btn-outline" to='/signup'>Sign Up</Link>
                                </nav>

                        }
                    </nav>

                </nav>
            </nav>
        </nav>


    );
}


export default Header;