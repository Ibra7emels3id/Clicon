'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const FormData = ({ userId }) => {
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = useState(false);
    const Router = useRouter()

    // Handle Email Verification
    const HandleResetPassword = async () => {
        setLoading(true);
        await axios.post('/api/reset-password-api', { id: userId, password })
            .then((res) => {
                toast.success(res.data.message);
                setLoading(false);
                Router.replace('/')
                return res;
            }).catch(() => {
                toast.error('Failed to reset password');
                setLoading(false);
                return null;
            }).finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="btn flex flex-col gap-2 w-[400px] m-auto shadow-2xl p-5">
            <h1 className="text-2xl text-center font-bold">Reset Password</h1>
            <input className='p-2 border border-gray-200 focus:outline-none ' type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {
                loading ? <button disabled className='bg-[#FA8232] w-full py-2 text-white cursor-pointer'>Loading...</button> :
                    <button className='bg-sky-500 px-3 py-2 text-white cursor-pointer' onClick={HandleResetPassword} type="submit">Reset Password</button>
            }
        </div>
    );
}

export default FormData;
