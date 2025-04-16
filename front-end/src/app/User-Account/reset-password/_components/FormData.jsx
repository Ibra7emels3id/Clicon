'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const FormData = () => {
    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false);
    const Router = useRouter()

    // Handle Resat Password
    const HandleResatPassword = async (e) => {
        e.preventDefault();
        if (!email) return toast.info('Enter Email Please');
        // Your code for password reset goes here
        try {
            setLoading(true);
            const res = await axios.post('/api/reset-password', { email })
            if (res.status === 200) {
                toast.success(res.data.message);
                setSuccess('Check Email Please ');
                Router.replace('/User-Account/sign-in')
                setEmail('');
                setLoading(false);
                return
            };
        } catch (error) {
            console.error('Error resetting password:', error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }


    return (
        <form className='sm:w-[450px] w-[100vw] max-sm:mx-3 m-auto flex flex-col shadow-2xl gap-3 p-5 rounded'>
            <h3 className='text-center font-bold py-3 text-3xl'>Reset Password</h3>
            {success && <p className='text-red-500 '>{success}</p>}
            <input onChange={(e) => {
                setEmail(e.target.value);
            }} value={email} className='p-2 border outline-none focus:outline-none border-gray-200' type="email" id="email" name="email" required placeholder='Enter Email ...' />
            {
                loading ? <button disabled className='bg-[#FA8232] w-full py-2 text-white cursor-pointer'>Loading...</button> :
                    <button onClick={HandleResatPassword} className='bg-sky-500 text-white p-2 cursor-pointer text-md'>Submit</button>
            }
        </form>
    );
}

export default FormData;
