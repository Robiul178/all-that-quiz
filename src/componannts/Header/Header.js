import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="main-container">
            <div className="logo-side">
                <h1>AllThatQuiz</h1>
            </div>
            <div className="menu-side">
                <nav className='navBar'>
                    <Link to='/'>Topic</Link>
                    <Link to='/statistic'>Statistic</Link>
                    <Link to='blog'>Blog</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;