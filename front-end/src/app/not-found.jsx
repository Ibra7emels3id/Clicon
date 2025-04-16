'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
    const Router = useRouter();


    return (
        <div className='flex flex-col items-center justify-center gap-3 h-[500px]'>
            <Image
                src={'/images/error.png'}
                width={300}
                height={300}
                alt='Error'
            />
            <h3 className='text-3xl font-bold '>404, Page not founds</h3>
            <p className='text-sm font-normal text-center w-1/3 text-gray-500 m-auto block'>Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</p>
            <div className="btn flex items-center gap-6 text-white">
                <button className='bg-sky-500 w-[150px] h-12  flex items-center justify-center cursor-pointer' onClick={()=>Router.back()}>Go Back</button>
                <Link className='bg-sky-500 w-[150px] h-12  flex items-center justify-center' href={'/'}>Go To Home</Link>
            </div>
        </div>
    );
}

export default NotFound;
