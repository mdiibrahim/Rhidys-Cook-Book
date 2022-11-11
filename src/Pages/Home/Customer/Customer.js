import React from 'react';

const Customer = () => {
    return (
        <div className=''>
            <h1 className='text-3xl text-center mt-16 mb-4 font-semibold'>Our dedicated Partners: </h1>
            <div className='grid md:grid-cols-7 grid-cols-4 gap-1 '>
               <img className='rounded-2xl' src='res 1.png' alt=''/>
               <img src='res 2.png' alt=''  className='rounded-2xl'/>
               <img src='res 3.png' alt=''  className='rounded-2xl'/>
               <img src='res 4.png' alt=''  className=''/>
               <img src='res 5.png' alt=''  className=''/>
               <img src='res 6.png' alt=''  className=''/>
               <img src='res 7.png' alt=''  className=''/>
               
            </div>
        </div>
    );
};

export default Customer;