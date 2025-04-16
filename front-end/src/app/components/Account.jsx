'use client'
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { useAppDispatch } from '@/lib/hooks';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Account = () => {
    const [showDialog, setShowDialog] = useState('hidden')
    const { data: section } = useSession()


    // Handle Show Dialog
    const HandleShowDialog = () => {
        setShowDialog(showDialog === 'block' ? 'hidden' : 'block')
    };

    // Handle Signup
    const HandleSignup = () => {
        signOut().then(() => {
            toast.success('Your account has been signed out')
        })
    };



    return (
        <div className="relative font-[sans-serif] w-max mx-auto z-50">
            <button
                onClick={HandleShowDialog}
                type="button"
                className="cursor-pointer capitalize p-1 flex items-center ml-3 rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
            >
                <img
                    src="https://readymadeui.com/profile_6.webp"
                    className="w-8 h-8  rounded-full shrink-0"
                />
            </button>
            <ul
                id="dropdownMenu"
                className={`${showDialog} -left-[90px]  absolute shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto`}
            >
                {section?.user &&
                    <>
                        <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                            <Link href={'/User-Account'} className='flex w-full'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-4 h-4 mr-3"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                                        data-original="#000000"
                                    />
                                </svg>
                                View profile
                            </Link>
                        </li>
                        <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                            <Link onClick={HandleShowDialog} href={'/order'} className='flex gap-3 w-full'>
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="-102.4 -102.4 1228.80 1228.80"
                                    fill="#000000"
                                    className="icon"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="#000000"
                                    strokeWidth="0.01024"
                                    transform="matrix(1, 0, 0, 1, 0, 0)"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="#CCCCCC"
                                        strokeWidth="24.576"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M53.6 1023.2c-6.4 0-12.8-2.4-17.6-8-4.8-4.8-7.2-11.2-6.4-18.4L80 222.4c0.8-12.8 11.2-22.4 24-22.4h211.2v-3.2c0-52.8 20.8-101.6 57.6-139.2C410.4 21.6 459.2 0.8 512 0.8c108 0 196.8 88 196.8 196.8 0 0.8-0.8 1.6-0.8 2.4v0.8H920c12.8 0 23.2 9.6 24 22.4l49.6 768.8c0.8 2.4 0.8 4 0.8 6.4-0.8 13.6-11.2 24.8-24.8 24.8H53.6z m25.6-48H944l-46.4-726.4H708v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8s-44.8-20-44.8-44.8c0-14.4 7.2-27.2 20-36h0.8v-57.6H363.2v57.6h0.8c12.8 8.8 20 21.6 20 36 0 24.8-20 44.8-44.8 44.8-24.8 0-44.8-20-44.8-44.8 0-14.4 7.2-27.2 20-36h0.8v-57.6H125.6l-46.4 726.4zM512 49.6c-81.6 0-148.8 66.4-148.8 148.8v3.2h298.4l-0.8-1.6v-1.6c0-82.4-67.2-148.8-148.8-148.8z"
                                            fill=""
                                        />
                                    </g>
                                </svg>
                                Order
                            </Link>
                        </li>
                    </>
                }
                <li onClick={HandleSignup} className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 mr-3"
                        viewBox="0 0 6.35 6.35"
                    >
                        <path
                            d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                            data-original="#000000"
                        />
                    </svg>
                    Logout
                </li>
            </ul>
        </div>
    );
}

export default Account;