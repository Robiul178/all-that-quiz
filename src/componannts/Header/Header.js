import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="main-container text-xl font-semibold ">
            <div className="logo-side px-20">
                <h3 className='common name-div'>AllThatQuiz</h3>
            </div>
            <div className="menu-side">
                <nav className='navBar'>
                    <Link className='common' to='/'>Topic</Link>
                    <Link className='common' to='/statistic'>Statistic   </Link>
                    <Link className='ok' to='blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};
export default Header;