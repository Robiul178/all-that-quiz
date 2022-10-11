import React from 'react';

const JquizShow = ({ j }) => {
    return (
        <div>
            <div className='questions'>
                <h2>Question:{j.question}</h2><br />
                <div className="option-container">
                    <h3 className='option'>{j.options[0]}</h3>
                    <h3 className='option'>{j.options[1]}</h3>
                    <h3 className='option'>{j.options[2]}</h3>
                    <h3 className='option'>{j.options[3]}</h3>
                </div>
            </div>
        </div>
    );
};

export default JquizShow;