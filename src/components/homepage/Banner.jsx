import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto text-center gap-40'>
            <div >
                <h1 className='font-bold text-5xl py-4'>Friends to keep close in your life</h1>
                <p className='opacity-100'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                   <br /> relationships that matter most.</p>
            </div>
            <button className='mt-8 px-4 py-3 bg-[#244D3F] text-white text-center rounded-xl'>+Add a Friend</button>
        </div>
    );
};

export default Banner;