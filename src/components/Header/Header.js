import React from 'react';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div>
                    <img className='w-20 rounded-full ml-10 mt-3' src={logo} alt="" />
                    <a href='/' className="border-y-0 border-black btn btn-ghost normal-case font-serif text-3xl font-extrabold">Absolute Fitness</a>
                </div>
                <div className=' text-xl font-medium hidden lg:block'>
                    <a className='border-b-4 rounded-lg' href="/">Home</a>
                    <a className='ml-7 border-b-4 rounded-lg' href="/">Catagories</a>
                    <a className='ml-7 border-b-4 rounded-lg' href="/">Blog</a>
                    <a className='ml-7 border-b-4 rounded-lg' href="/">About</a>
                </div>
                <div>
                    <button className="block lg:hidden btn btn-square btn-ghost mr-3">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><a href='/'>Home</a></li>
                                <li><a href='/'>Catagories</a></li>
                                <li><a href='/'>Blog</a></li>
                                <li><a href='/'>About</a></li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;