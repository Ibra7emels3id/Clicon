import React from 'react';
import FormData from './_components/FormData';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerSession(authOptions);

    // Check User
    if (session) return redirect('/');

    return (
        <div className='h-[450px] '>
            <div className="flex h-full">
                <FormData />
            </div>
        </div>
    );
}

export default Page;
