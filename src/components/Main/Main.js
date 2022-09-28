import React, { useEffect, useState } from 'react';
import Info from '../../Info/Info';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Main = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setDatas(data))

    }, [])

    return (
        <div className='main-container grid grid-cols-1 lg:grid-cols-4'>
            <div className='col-span-3'>
                <div>
                    <Header></Header>
                </div>
                {/* ----------Card Group----------  */}
                <div className='mx-10 mt-10'>
                    <h2 className='mb-7 text-2xl font-bold shadow-xl pb-4 rounded-lg text-center'>Select today's exercise</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                        {
                            datas.map(data => <Card
                                data={data}
                                key={data.id}
                            ></Card>)
                        }
                    </div>
                </div>
            </div>
            {/* ---------Info and Activities Section ------------ */}
            <div className='bg-stone-100'>
                <Info></Info>
            </div>
        </div>
    );
};

export default Main;