import React from 'react';

const Break = () => {
    return (
        <div className='mt-7'>
            <h2 className='text-xl font-semibold'>Add a Break</h2>
            <div className='bg-stone-200 mt-3 p-2 flex  justify-between rounded-lg'>
                <button className="btn btn-outline btn-secondary rounded-full">10s</button>
                <button className="btn btn-outline btn-secondary rounded-full">20s</button>
                <button className="btn btn-outline btn-secondary rounded-full">30s</button>
                <button className="btn btn-outline btn-secondary rounded-full">40s</button>
                <button className="btn btn-outline btn-secondary rounded-full">50s</button>
            </div>
        </div>
    );
};

export default Break;