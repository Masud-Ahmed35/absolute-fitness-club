import React from 'react';

const ExerciseDetails = ({ exerciseTime }) => {
    return (
        <div className='mt-10'>
            <h2 className='text-xl font-semibold mb-3'>Exercise Details</h2>
            <div className='bg-stone-200 flex justify-between px-8 py-3 text-xl font-medium rounded-lg'>
                <p>Exercise time:</p>
                <p className='text-gray-500'>{exerciseTime} seconds</p>
            </div>
            <div className='bg-stone-200 flex mt-5 justify-between px-8 py-3 text-xl font-medium rounded-lg'>
                <p>Break time:</p>
                <p className='text-gray-500'>50 seconds</p>
            </div>
            <button className="btn btn-success w-full mt-10 text-lg font-semibold text-white">Activity Completed</button>

        </div>
    );
};

export default ExerciseDetails;