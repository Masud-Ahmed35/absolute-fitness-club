import React from 'react';

const Break = ({ breakTime }) => {
    return (
        <div className='mt-9'>
            <h2 className='text-xl font-semibold mb-4'>Add a Break</h2>
            <div className='bg-stone-200 mt-3 p-2 flex  justify-evenly rounded-lg'>
                <button onClick={() => {
                    breakTime(10);
                    localStorage.setItem('breakTime', 10);
                }} className="btn btn-outline btn-secondary rounded-full w-11">10s</button>
                <button onClick={() => {
                    breakTime(20);
                    localStorage.setItem('breakTime', 20);
                }} className="btn btn-outline btn-secondary rounded-full w-11">20s</button>
                <button onClick={() => {
                    breakTime(30);
                    localStorage.setItem('breakTime', 30);
                }} className="btn btn-outline btn-secondary rounded-full w-11">30s</button>
                <button onClick={() => {
                    breakTime(40);
                    localStorage.setItem('breakTime', 40);
                }} className="btn btn-outline btn-secondary rounded-full w-11">40s</button>
                <button onClick={() => {
                    breakTime(50);
                    localStorage.setItem('breakTime', 50);
                }} className="btn btn-outline btn-secondary rounded-full w-11">50s</button>
            </div>
        </div>
    );
};

export default Break;