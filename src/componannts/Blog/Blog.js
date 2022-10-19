import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className="first-question">
                <h1 className='text-xl font-semibold'>Q1.What is the purpose react router?</h1><br />
                <p className='text-sm'><span className='font-semibold'>Answer:</span> React Router is a standard library
                    for routing in React. It enables
                    the navigation among views of various
                    components in a React Application, allows
                    changing the browser URL, and keeps
                    the UI in sync with the URL
                </p>
            </div>
            <div className="first-question">
                <h1 className='text-xl font-semibold'>Q2.How does context api work?</h1><br />
                <p className='text-sm'><span className='font-semibold'>Answer:</span> The React Context API
                    is a way for a React app to effectively
                    produce global variables that can be
                    passed around. This is the alternative
                    to "prop drilling" or moving props
                    from grandparent to child to parent,
                    and so on. Context is also touted as
                    an easier, lighter approach to
                    state management using Redux.
                </p>
            </div>
            <div className="first-question">
                <h1 className='text-xl font-semibold'>Q3.How to work useRef hook?</h1><br />
                <p className='text-sm'><span className='font-semibold'>Answer:</span> The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.
                    useRef() only returns one item. It returns an Object called current.
                    In general, we want to let React handle all DOM manipulation.
                    But there are some instances where useRef can be used without causing issues.
                    In React, we can add a ref attribute to an element to access it directly in the DOM.
                </p>
            </div>
        </div>
    );
};

export default Blog;