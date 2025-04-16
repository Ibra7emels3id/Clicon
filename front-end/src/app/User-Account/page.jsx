import React from 'react';
import FormData from './_components/FormData';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Loader from '../Loader';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerSession(authOptions);

    // Set Check User
    if (!session) return redirect('/');

    return (
        <div className='max-w-7xl lg:px-7 px-3 m-auto mt-5'>
            <FormData />
        </div>
    );
}

export default Page;
