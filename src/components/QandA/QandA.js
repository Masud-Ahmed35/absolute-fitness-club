import React from 'react';

const QandA = () => {
    return (
        <div>
            <h1 className=' text-3xl font-bold mt-16 text-center shadow-2xl pb-5'>Question & Answer</h1>
            <div className='m-11 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className=''>
                    <h1 className='text-2xl font-bold mb-3'>How does ReactJs works?</h1>
                    <p className=''>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React.js is virtual DOM. It is a tree based on JavaScript components created with React that mimics a DOM tree. It does the least amount of DOM manipulation possible in order to keep your React components up to date.</p>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold mb-3'>Difference between props and state.</h1>
                    <h3 className='text-lg font-semibold'>Props:</h3>
                    <li>The Data is passed from one component to another.</li>
                    <li>It is Immutable, It can not be modified.</li>
                    <li>Props can be used with state and functional components.</li>
                    <li>Props are read-only.</li>
                    <h3 className='text-lg font-semibold'>State:</h3>
                    <li>The Data is passed within the component only.</li>
                    <li>It is Mutable, It can be modified.</li>
                    <li>State can be used only with the state components/class component Before 16.0.</li>
                    <li>State is both read and write.</li>
                </div>
                <div className=''>
                    <h1 className='text-2xl font-bold mb-3'>What are the uses of useEffect?</h1>
                    <p>The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The first argument is a function and the second one is a dependency argument.</p>
                </div>
            </div>
        </div>
    );
};

export default QandA;