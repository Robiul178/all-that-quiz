import React from 'react';

const GitQuizShow = ({ g }) => {
    return (
        <div>
            <div className='questions'>
                <h2>Question:{g.question}</h2><br />
                <div className="option-container">
                    <h3 className='option'>{g.options[0]}</h3>
                    <h3 className='option'>{g.options[1]}</h3>
                    <h3 className='option'>{g.options[2]}</h3>
                    <h3 className='option'>{g.options[3]}</h3>
                </div>
            </div>
        </div>
    );
};

export default GitQuizShow;