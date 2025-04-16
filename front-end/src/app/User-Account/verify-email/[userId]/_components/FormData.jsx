'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const FormData = ({ userId }) => { 
    const [loading, setLoading] = React.useState(false);
    const Router = useRouter()

    // Handle Email Verification
    const HandleEmailVerification = async () => {
        setLoading(true);
        await axios.post('/api/verify-email', { id: userId })
            .then((res) => {
                toast.success(res.data.message);
                Router.replace('/')
                setLoading(false);
                return res;
            }).catch(() => {
                toast.error('Failed to verify email');
                setLoading(false);
                return null;
            });
        setLoading(false)
    };

    return (
        <div className="btn">
            {
                loading ? <button disabled className='bg-sky-500 w-[200px] py-2 px-2 text-white cursor-pointer block'>Loading...</button> :
                    <button className='bg-sky-500 px-2 py-2 w-[200px] text-white cursor-pointer' onClick={HandleEmailVerification} type="submit">Email Verification</button>
            }
        </div>
    );
}

export default FormData;
