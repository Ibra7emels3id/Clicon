'use client'
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { RemoveItem } from '@/lib/features/Cart/RemoveItemSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const ButtonCart = () => {
    const [show, setShow] = React.useState(false);
    const { user } = useAppSelector((state) => state.user)
    const { data: section } = useSession()
    const dispatch = useAppDispatch()


    // Handle Get User 
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);

    return (
        <div className=' relative '>
            <button onClick={() => setShow(!show)} className="block px-4 py-2 text-sm font-bold text-gray-700 hover:text-gray-900">
                <span className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        className="cursor-pointer fill-white hover:fill-yellow inline-block"
                        viewBox="0 0 512 512"
                    >
                        <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"
                        />
                    </svg>
                    <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-sky-500 px-1 py-0 text-xs text-white">
                        {user?.cart?.quantity > 0 && user?.cart?.quantity}
                    </span>
                </span>
            </button>
            <div className={`${show ? 'block' : 'hidden'} absolute top-11 -right-2`}>
                <div
                    className="relative w-screen max-w-sm border border-[#FA8232] bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                    aria-modal="true"
                    role="dialog"
                    tabIndex="-1"
                >
                    <button onClick={() => setShow(false)} className="absolute end-4 top-4 text-gray-600 hover:text-red-600 transition hover:scale-110">
                        <span className="sr-only">Close cart</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 cursor-pointer "
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="mt-4 space-y-6">
                        <ul className="space-y-4">
                            {user?.cart?.items?.slice(0, 3)?.map((it) => (
                                <li className="flex items-center gap-4">
                                    <Image
                                        src={it.image_1}
                                        alt={it.title}
                                        width="48"
                                        height="48"
                                        className="size-16 rounded-sm object-cover"
                                    />
                                    <div>
                                        <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>
                                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                            <div>
                                                <dt className="inline">Size:</dt>
                                                <dd className="inline">XXS</dd>
                                            </div>
                                            <div>
                                                <dt className="inline">Color:</dt>
                                                <dd className="inline">White</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="flex flex-1 items-center justify-end gap-2">
                                        <p className="h-8 w-12 flex items-center justify-center rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none">
                                            {it.quantity}
                                        </p>
                                        <button onClick={async (e) => {
                                            await dispatch(RemoveItem({ id: section?.user?.id, itemId: it._id }))
                                            await dispatch(FetchUser({ id: section?.user?.id }))
                                        }} className="text-gray-600 cursor-pointer transition hover:text-red-600">
                                            <span className="sr-only">Remove item</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-4 text-center">

                            {user?.cart?.items?.length > 0 &&
                                // <Link
                                //     href="/shop/cart/check-out"
                                //     onClick={() => setShow(false)}
                                //     className="block bg-white px-5 py-3 text-sm hover:text-white text-[#FA8232] transition hover:bg-[#FA8232] border-[#FA8232] border"
                                // >
                                //     Checkout
                                // </Link>
                                <Link onClick={() => setShow(false)} href="/shop/cart" className="block  border border-[#FA8232] bg-[#FA8232] px-5 py-3 text-sm text-white transition hover:bg-white hover:text-[#FA8232]">
                                    View my cart ({user?.cart?.items?.length})
                                </Link>
                            }
                            <Link
                                href="/shop"
                                onClick={() => setShow(false)}
                                className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                            >
                                Continue shopping
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ButtonCart;
