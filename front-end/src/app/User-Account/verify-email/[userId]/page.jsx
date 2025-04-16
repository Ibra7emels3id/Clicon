import axios from 'axios';
import React from 'react';
import FormData from './_components/FormData';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Page = async ({ params }) => {
    const session = await getServerSession(authOptions);
    const { userId } = params;

    // Handle get verify 
    if (session?.user?.isActive) return redirect('/');



    return (
        <div className='h-[300px] '>
            <div className="flex items-center justify-center h-full">
                <FormData userId={userId} />
            </div>
        </div>
    );
}

export default Page;
