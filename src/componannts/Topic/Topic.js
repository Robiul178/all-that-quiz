import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topic.css'

const Topic = () => {
    const quizItems = useLoaderData();
    console.log(quizItems.data[3])
    return (
        <div className="container">
            <h2>all ok :{quizItems.length}</h2>
        </div>
    );
};

export default Topic;