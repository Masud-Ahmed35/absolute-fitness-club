import React, { useEffect, useState } from 'react';
import Break from '../components/Break/Break';
import ExerciseDetails from '../components/ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Info = ({ exerciseTime }) => {
    const [restTime, setRestTime] = useState(0);
    // const [rest, setRest] = useState(0);
    // console.log(rest);

    const breakTime = time => {
        setRestTime(time);
    }
    useEffect(() => {
        const localStorageData = localStorage.getItem('breakTime');
        setRestTime(JSON.parse(localStorageData));
    }, [])

    return (
        <div className='ml-5'>
            <PersonalInfo></PersonalInfo>
            <Break breakTime={breakTime}></Break>
            <ExerciseDetails exerciseTime={exerciseTime} restTime={restTime}></ExerciseDetails>
        </div>
    );
};

export default Info;