import React from 'react';

const CssQuizShow = ({ c }) => {
    return (
        <div>
            <div className='questions'>
                <h2>Question:{c.question}</h2><br />
                <div className="option-container">
                    <h3 className='option'>{c.options[0]}</h3>
                    <h3 className='option'>{c.options[1]}</h3>
                    <h3 className='option'>{c.options[2]}</h3>
                    <h3 className='option'>{c.options[3]}</h3>
                </div>
            </div>
        </div>
    );
};

export default CssQuizShow;