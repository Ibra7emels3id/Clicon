import FormLocation from '@/app/components/FormLocation';
import Link from 'next/link';
import React from 'react';
import FormData from './_components/FormData';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';



const Page = async () => {
    const session = await getServerSession(authOptions);

    // Check User 
    if (session) return redirect('/');


    return (
        <>
            <FormLocation />
            <div className=' mt-10'>
                <div className='container flex items-center justify-center  mx-auto'>
                    <div className="flex flex-col bg-white shadow-2xl w-[450px] m-auto p-5">
                        <div className="title text-center py-4 flex items-center">
                            <Link href={'/User-Account/sign-in'} className='w-full font-bold'>Sign In</Link>
                            <Link href={'/User-Account/sign-up'} className='w-full border-b-2 text-sky-600 font-bold py-2 border-sky-600'>Sign Up</Link>
                        </div>
                        <FormData />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
