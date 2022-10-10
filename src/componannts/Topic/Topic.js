import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topic.css'
import images from '../images/school.png'

const Topic = () => {
    const quizItems = useLoaderData();
    console.log(quizItems)
    return (
        <div>
            <div>
                <div className="container">
                    <div className="text-container">
                        <h1 className='text-3xl font-bold'>Why Play Quizzes?</h1> <br />
                        <p className='text-xl'>Playing online quiz games helps to
                            improve learning as well as capturing
                            capacity that sharpens your brain
                            with tactful skills and the experience
                            you gain from playing quiz helps you
                            in various stages.
                        </p> <br />
                        <p className='text-xl'>
                            They can support differentiation and provide
                            pre-teaching indicators, assessment for
                            learning, rich feedback, self assessment
                            and summative information about progress.
                            They are also a great way to help with
                            revision. And are a fun tool to help
                            enthuse children to engage in their learning.
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={images} height={300} width={300} alt="" />
                    </div>
                </div>
            </div>
            <div className='quiz-topic'>

            </div>
        </div>
    );
};

export default Topic;