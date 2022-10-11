import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JquizShow from '../JquizShow/JquizShow';

const JavaScript = () => {
    const javaQuiz = useLoaderData();
    return (
        <div>
            {
                javaQuiz.data.questions.map(j => <JquizShow
                    j={j}
                ></JquizShow>)
            }
        </div>
    );
};

export default JavaScript;