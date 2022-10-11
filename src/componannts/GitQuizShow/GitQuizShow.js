import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Git.css'


const GitQuizShow = ({ g }) => {
    return (
        <div>
            <div className='questions'>
                <h2 className='text-3xl font-semibold'>{g.question}</h2><br />
                <EyeIcon className="h-6 w-6 text-blue-500" />
                <div className="option-container font-semibold">
                    <button className='option'>{g.options[0]}</button>
                    <button className='option'>{g.options[1]}</button>
                    <button className='option'>{g.options[2]}</button>
                    <button className='option'>{g.options[3]}</button>
                </div>
            </div>
        </div>
    );
};

export default GitQuizShow;