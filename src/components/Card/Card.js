import React from 'react';

const Card = ({ data, handleTime }) => {
    const { age, description, img, name, time } = data;

    return (
        <div>
            <div className="card h-[570px] bg-base-100 shadow-xl border-2">
                <figure><img className='rounded-lg shadow-2xl w-72 h-60 mt-3' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className=''>{description.slice(0, 70)}...</p>
                    <div className='mb-3'>
                        <p className='font-bold'>For Age: {age} Years</p>
                        <p className='font-bold'>Time Required: {time}s</p>
                    </div>
                    <button onClick={() => handleTime(time)} className="btn btn-outline btn-success">Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Card;