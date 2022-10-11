import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CssQuizShow from '../CssQuizShow/CssQuizShow';

const Css = () => {
    const cssQuiz = useLoaderData();
    return (
        <div>
            {
                cssQuiz.data.questions.map(c => <CssQuizShow
                    c={c}
                ></CssQuizShow>)
            }
        </div>
    );
};

export default Css;