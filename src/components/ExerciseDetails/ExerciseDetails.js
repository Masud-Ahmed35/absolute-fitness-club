import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ExerciseDetails = ({ exerciseTime, restTime }) => {

    const notify = () => toast("WoW Activity Completed Successfully!!!");

    return (
        <div className='mt-10'>
            <h2 className='text-xl font-semibold mb-3'>Exercise Details</h2>
            <div className='bg-stone-200 flex justify-between px-8 py-3 text-xl font-medium rounded-lg'>
                <p>Exercise time:</p>
                <p className='text-gray-500'>{exerciseTime} seconds</p>
            </div>
            <div className='bg-stone-200 flex mt-5 justify-between px-8 py-3 text-xl font-medium rounded-lg'>
                <p>Break time:</p>
                <p className='text-gray-500'>{restTime} seconds</p>
            </div>
            <button onClick={notify} className="btn btn-success w-full mt-10 text-lg font-semibold text-white">Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ExerciseDetails;