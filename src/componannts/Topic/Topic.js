import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topic.css'
import images from '../images/school.png'
import QuizTopic from '../QuizTopic/QuizTopic';

const Topic = () => {
    const quizItems = useLoaderData();
    // console.log(quizItems)
    return (
        <div className='home-container'>
            <div className="container">
                <div className="text-container">
                    <h1 className='text-xl font-bold'>Why Play Quizzes?</h1> <br />
                    <p className='text-sm' >Playing online quiz games helps to improve learning as
                        well as capturing capacity that sharpens your brain with tactful skills
                        and the experience you gain from playing quiz helps you in various stages.
                    </p> <br />
                    <p className='text-sm'>
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
                    <img src={images} height={250} width={300} alt="" />
                </div>
            </div>
            <div className='quiz-container'>
                {
                    quizItems.map(quiztopic => <QuizTopic
                        key={quiztopic.id}
                        quiztopic={quiztopic}
                    ></QuizTopic>)
                }

            </div>
        </div>
    );
};

export default Topic;