import React from 'react';

const ReactruizShow = ({ r }) => {
    console.log(r)
    return (
        <div>
            <div>
                <div>
                    <div className='ruestions'>
                        <h2>ruestion:{r.question}</h2><br />
                        <div className="option-container">
                            <h3 className='option'>{r.options[0]}</h3>
                            <h3 className='option'>{r.options[1]}</h3>
                            <h3 className='option'>{r.options[2]}</h3>
                            <h3 className='option'>{r.options[3]}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactruizShow;