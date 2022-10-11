import React from 'react';
import './ReactCss.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const ReactruizShow = ({ r }) => {
    return (
        < div >
            <div className='questions'>
                <h2 className='text-3xl font-semibold'>{r.question}</h2><br />
                <EyeIcon className="h-6 w-6 text-blue-500" />
                <div className="option-container font-semibold">
                    <button className='option'>{r.options[0]}</button>
                    <button className='option'>{r.options[1]}</button>
                    <button className='option'>{r.options[2]}</button>
                    <button className='option'>{r.options[3]}</button>
                </div>
            </div>
        </div >
    );
};

export default ReactruizShow;