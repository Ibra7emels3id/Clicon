'use client'
import { AddToCart } from '@/lib/features/Cart/AddToCartSlice';
import { DeleteItems } from '@/lib/features/Cart/DeleteItemsSlice';
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { RemoveCartQuantity } from '@/lib/features/Cart/RemoveCartQuantity';
import { RemoveItem } from '@/lib/features/Cart/RemoveItemSlice';
import { AddToItemRepo } from '@/lib/features/Order/GetOrder';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CartData = () => {
    const { data: section } = useSession()
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch();
    const Router = useRouter()


    // Handle Confirm Delete Items
    const HandleDeleteItems = async () => {
        if (confirm('Are you sure you want to delete')) {
            console.log('success');
            await dispatch(DeleteItems({ id: section?.user?.id }));
            await dispatch(FetchUser({ id: section?.user?.id }))
        }
    };

    // Handle Get User 
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);



    return (
        <div className="flex flex-col">
            <div className="grid md:grid-cols-3 gap-10 mt-8">
                <div className="md:col-span-2 space-y-4">
                    {user?.cart?.items?.map((it) => (
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
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <h3 className="text-sm sm:text-base font-bold text-slate-700">
                                            {it.title.slice(0, 50)}...
                                        </h3>
                                        <p className="text-sm font-semibold text-slate-500 mt-2 flex items-center gap-2">
                                            {it.category?.name}
                                        </p>
                                    </div>
                                    <div className="mt-auto flex items-center gap-3">
                                        <button
                                            onClick={async (e) => {
                                                await dispatch(RemoveCartQuantity({ id: section?.user?.id, itemId: it._id }))
                                                await dispatch(FetchUser({ id: section?.user?.id }))
                                            }}
                                            type="submit"
                                            className="flex items-center justify-center cursor-pointer w-5 h-5 bg-slate-400 outline-none rounded-full"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-2 fill-white"
                                                viewBox="0 0 124 124"
                                            >
                                                <path
                                                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </button>
                                        <span className="font-semibold text-sm leading-[18px]">{it.quantity}</span>
                                        <button
                                            onClick={async (e) => {
                                                await dispatch(AddToCart({ id: section?.user?.id, item: it }))
                                                await dispatch(FetchUser({ id: section?.user?.id }))
                                            }}
                                            type="submit"
                                            className="flex items-center justify-center cursor-pointer w-5 h-5 bg-slate-800 outline-none rounded-full"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-2 fill-white"
                                                viewBox="0 0 42 42"
                                            >
                                                <path
                                                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto flex flex-col">
                                <div className="flex items-start gap-4 justify-end">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 cursor-pointer fill-slate-400 hover:fill-pink-600 inline-block"
                                            viewBox="0 0 64 64"
                                        >
                                            <path
                                                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </button>
                                    <button type="submit"
                                        onClick={async (e) => {
                                            await dispatch(RemoveItem({ id: section?.user?.id, itemId: it._id }))
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
                    ))}
                    {user?.cart?.items?.length > 0 &&
                        <div className="flex items-center justify-between w-full mt-3">
                            <p className='font-bold'>Number of products <span className='text-sky-600'>{user?.cart?.items?.length}</span></p>
                            <button onClick={HandleDeleteItems} className='bg-red-500 hover:bg-red-600 cursor-pointer py-2 px-3  text-white'>Delete Items</button>
                        </div>
                    }
                </div>
                <div className="bg-white border border-gray-200 px-4 py-6 h-max ">
                    <ul className="text-slate-900 font-medium space-y-4">
                        <li className="flex flex-wrap gap-4 text-sm">
                            Subtotal <span className="ml-auto font-semibold">${user?.cart?.total_price}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-sm">
                            Shipping <span className="ml-auto font-semibold">$2.00</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-sm">
                            Tax <span className="ml-auto font-semibold">$4.00</span>
                        </li>
                        <hr className="border-slate-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-semibold">
                            Total <span className="ml-auto">${user?.cart?.total_price + 4 + 2}</span>
                        </li>
                    </ul>
                    <div className="mt-8 space-y-2">
                        {user?.cart?.items?.length > 0 && <button
                            onClick={() => Router.push(`/shop/cart/check-out/${section?.user?.token}`)}
                            type="button"
                            className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-[#FA8232] hover:bg-white text-white hover:text-[#FA8232] cursor-pointer border  border-[#FA8232]"
                        >
                            Buy Now
                        </button>}
                        <Link
                            href={'/shop'}
                            className="text-sm px-4 py-2.5 w-full block text-center font-semibold tracking-wide bg-transparent hover:bg-[#FA8232] text-[#FA8232] border border-[#FA8232] cursor-pointer hover:text-white "
                        >
                            Continue Shopping
                        </Link>
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <img
                            src="https://readymadeui.com/images/master.webp"
                            alt="card1"
                            className="w-10 object-contain"
                        />
                        <img
                            src="https://readymadeui.com/images/visa.webp"
                            alt="card2"
                            className="w-10 object-contain"
                        />
                        <img
                            src="https://readymadeui.com/images/american-express.webp"
                            alt="card3"
                            className="w-10 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartData;
