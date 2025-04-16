'use client'
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Wishlist = () => {
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const {data: section} = useSession()


    // Handle Get User 
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);


    return (
        <Link href="/shop/favorite" className="block px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900">
            <span className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    className="cursor-pointer fill-white hover:fill-yellow inline-block"
                    viewBox="0 0 64 64"
                >
                    <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                    />
                </svg>
                <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-sky-500 px-1 py-0 text-xs text-white">
                    {user?.wishlists?.quantity || ''}
                </span>
            </span>
        </Link>
    );
}

export default Wishlist;
