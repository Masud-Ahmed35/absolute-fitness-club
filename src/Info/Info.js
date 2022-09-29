import React from 'react';
import Break from '../components/Break/Break';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const Info = () => {
    return (
        <div className='ml-5'>
            <PersonalInfo></PersonalInfo>
            <Break></Break>
        </div>
    );
};

export default Info;