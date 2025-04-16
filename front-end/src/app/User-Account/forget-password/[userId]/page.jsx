import React from 'react';
import FormData from './_components/FormData';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const Page = async ({params}) => {
    const session = await getServerSession(authOptions);
    const {userId} = params;
    
    if (session) return redirect('/');

    return (
        <div className='h-[450px]'>
            <div className="flex items-center justify-center h-full">
                <FormData userId={userId} />
            </div>
        </div>
    );
}

export default Page;
