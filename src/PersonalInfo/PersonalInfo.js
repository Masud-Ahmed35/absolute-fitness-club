import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import profilePic from '../images/profilePic.jpg'

const PersonalInfo = () => {
    return (
        <div className='pt-7'>
            <div className='flex align-middle'>
                <img className='w-20 rounded-box mr-4' src={profilePic} alt="" />
                <div>
                    <h2 className='text-2xl font-semibold'>Professor M</h2>
                    <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                    <span className='text-gray-400 ml-2'>Dhaka, Bangladesh</span>
                </div>
            </div>
            <div className='flex justify-evenly mt-7 bg-stone-200 p-2 rounded-xl'>
                <div>
                    <h1 className='text-3xl font-bold'>73<span className='text-gray-400 text-base font-medium'>kg</span></h1>
                    <p className='text-lg font-medium text-gray-500'>Weight</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>5.7<span className='text-gray-400 text-base font-medium'>in</span></h1>
                    <p className='text-lg font-medium text-gray-500'>Height</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>28<span className='text-gray-400 text-base font-medium'>yrs</span></h1>
                    <p className='text-lg font-medium text-gray-500'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;