import React from 'react';
import Break from '../components/Break/Break';
import ExerciseDetails from '../components/ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Info = ({ exerciseTime }) => {
    return (
        <div className='ml-5'>
            <PersonalInfo></PersonalInfo>
            <Break></Break>
            <ExerciseDetails exerciseTime={exerciseTime}></ExerciseDetails>
        </div>
    );
};

export default Info;