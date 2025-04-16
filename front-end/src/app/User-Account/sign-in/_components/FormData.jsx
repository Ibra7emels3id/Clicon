'use client'
import { getSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';



const FormData = () => {
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false);
    const Router = useRouter()

    // Handle Change Input Events
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    // Handle Submit Data To server
    const HandleSubmitData = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password)  return toast.info('Enter your email and password');

        setLoading(true);
        const res = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
        });
        console.log(res);
        if (res.ok) {
            toast.success('login successfully')
            setLoading(false);
            const { user } = await getSession();
            if (user?.role === 'admin') {
                Router.replace('/admin');
            } else {
                // Router.replace('/');
                window.location.href = '/'
            }
        } else {
            toast.error('Failed to login')
            setLoading(false);
        }
        setLoading(false);
    };


    return (
        <>
            <form action="" method="post" className='flex flex-col gap-3'>
                <div className="name">
                    <label className='block text-gray-600 font-normal ' htmlFor="name">Email Address</label>
                    <input onChange={handleChange} className='border border-gray-200 focus:outline-none p-2 w-full mt-1' type="email" id="email" name="email" required placeholder='Enter Email' />
                </div>
                <div className="pass">
                    <div className="flex items-center justify-between">
                        <label className='block text-gray-600  font-normal  ' htmlFor="password">Password</label>
                        <Link href={'/User-Account/reset-password'} className=' underline text-sm text-blue-500'>Reset password</Link>
                    </div>
                    <input onChange={handleChange} className='border border-gray-200 focus:outline-none p-2 w-full mt-1' type="password" id="password" name="password" required placeholder='Enter Password ...' />
                </div>
                <div className="btn mt-3">
                    {
                        loading ? <button disabled className='bg-[#FA8232] w-full py-2 text-white cursor-pointer'>Loading...</button> :
                            <button onClick={HandleSubmitData} type='submit' className='bg-[#FA8232] w-full py-2 text-white cursor-pointer'>Sign In</button>
                    }
                </div>
            </form>
            <div className="text-center text-gray-600 mt-5 relative">
                <span className='bg-white px-2 absolute left-1/2 -top-2.5 text-sm -translate-x-1/2'>or</span>
                <hr />
            </div>
            <div className="btn-SignIn mt-5 flex flex-col gap-3">
                <button className='flex gap-2 items-center cursor-pointer w-full border border-gray-200 p-2' type='button' >
                    <svg
                        viewBox="-0.5 0 48 48"
                        className='w-8'
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                            <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                {" "}
                                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                    {" "}
                                    <g id="Google" transform="translate(401.000000, 860.000000)">
                                        {" "}
                                        <path
                                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                            id="Fill-1"
                                            fill="#FBBC05"
                                        >
                                            {" "}
                                        </path>{" "}
                                        <path
                                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                            id="Fill-2"
                                            fill="#EB4335"
                                        >
                                            {" "}
                                        </path>{" "}
                                        <path
                                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                            id="Fill-3"
                                            fill="#34A853"
                                        >
                                            {" "}
                                        </path>{" "}
                                        <path
                                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                            id="Fill-4"
                                            fill="#4285F4"
                                        >
                                            {" "}
                                        </path>{" "}
                                    </g>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <span className='text-gray-600 text-center w-full'>Sign In with Google</span>
                </button>
                <button onClick={() => signIn('github', { callbackUrl: '/' })} className='flex gap-2 items-center cursor-pointer w-full border border-gray-200 p-2' type='button' >
                    <svg
                        className='w-8'
                        viewBox="0 -0.5 48 48"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <title>Github-color</title> <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                            <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                {" "}
                                <g
                                    id="Color-"
                                    transform="translate(-700.000000, -560.000000)"
                                    fill="#3E75C3"
                                >
                                    {" "}
                                    <path
                                        d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                                        id="Github"
                                    >
                                        {" "}
                                    </path>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <span className='text-gray-600 text-center w-full'>Sign In with Git Hub</span>
                </button>
            </div>
        </>
    );
}

export default FormData;
