import React, { useState } from 'react';
import Break from '../components/Break/Break';
import ExerciseDetails from '../components/ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Info = ({ exerciseTime }) => {
    const [restTime, setRestTime] = useState(0);

    const breakTime = time => {
        setRestTime(time);
        localStorage.setItem('breakTime', restTime);
        const localStorageData = localStorage.getItem('breakTime')

    }

    return (
        <div className='ml-5'>
            <PersonalInfo></PersonalInfo>
            <Break breakTime={breakTime}></Break>
            <ExerciseDetails exerciseTime={exerciseTime} restTime={restTime}></ExerciseDetails>
        </div>
    );
};

export default Info;