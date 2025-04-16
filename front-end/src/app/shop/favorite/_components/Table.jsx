'use client'
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { AddToWishlist } from '@/lib/features/wishlists/AddTowishlistSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect } from 'react';

const Table = () => {
    const { data: section } = useSession()
    const { user, loading } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()





    // Handle Get User 
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);


    if (user?.wishlists?.items.length > 0) {
        return (
            user?.wishlists?.items?.map((it) => (
                <div key={it._id} className="flex gap-4 bg-white px-4 py-6 border border-gray-200">
                    <div className="flex gap-4">
                        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                            <Image
                                src={it.image_1}
                                alt={it.title}
                                width={200}
                                height={200}
                                className="w-full h-full object-contain"
                                loading='lazy'
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-4">
                            <div className="title">
                                <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                                    {it.title.slice(0, 30)}...
                                </h3>
                            </div>
                            <div className="btn-add">
                                <button className='text-white bg-[#FA8232] min-w-fit px-3 py-2 cursor-pointer'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto flex flex-col">
                        <div className="flex items-start gap-4 justify-end">
                            <button type="submit"
                                onClick={async () => {
                                    await dispatch(AddToWishlist({ id: section?.user?.id, item: it }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-red-600 inline-block"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                        data-original="#000000"
                                    />
                                    <path
                                        d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-slate-900 mt-auto">
                            ${it.price}
                        </h3>
                    </div>
                </div>
            ))
        );
    }else{
        return <div>No items in wishlist...</div>
    }
}

export default Table;
