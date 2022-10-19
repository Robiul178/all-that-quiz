import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="main-container text-xl font-semibold text-white">
            <div>
                <h3 className='relative left-20'>AllThatQuiz</h3>
            </div>
            <div>
                <nav>
                    <div onClick={() => setOpen(!open)} className="h-2 w-6 md:hidden">
                        {
                            open ? <XMarkIcon /> : <Bars3Icon />
                        }
                    </div>

                    <ul className={`md:flex justify-center absolute duration-500 md:static ${open ? 'right-4' : 'top-[-100px]'}`}>
                        <div className='nabBar'>
                            <Link className='m-2' to='/'>Topic</Link>
                            <Link className='m-2' to='/statistic'>Statistic</Link>
                            <Link to='blog'>Blog</Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </div >
    );
};
export default Header;