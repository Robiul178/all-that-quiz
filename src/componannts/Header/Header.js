import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="main-container text-2xl font-semibold ">
            <div className="logo-side">
                <h1 className='common'>AllThatQuiz</h1>
            </div>
            <div className="menu-side">
                <nav className='navBar'>
                    <Link className='common' to='/'>Topic</Link>
                    <Link className='common' to='/statistic'>Statistic   </Link>
                    <Link to='blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;