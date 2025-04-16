'use client'
import { AddToCart } from '@/lib/features/Cart/AddToCartSlice';
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { FetchProducts } from '@/lib/features/Product/GetProductsSlice';
import { AddToWishlist } from '@/lib/features/wishlists/AddTowishlistSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Rating } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Product = ({ id, min, max }) => {
    const { products } = useAppSelector((state) => state.products)
    const { user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const { data: section } = useSession()
    const Router = useRouter()

    // Filter Data Category and minPrice And maxPrice
    const filterData = products?.filter((item) => {
        return item.category.name === id && item.price >= min && item.price <= max;
    })


    // Handle Fetch Products
    useEffect(() => {
        dispatch(FetchProducts())
    }, [])


    // Handle Get User 
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);


    return (
        filterData?.map((it) => (
            <div key={it._id} className="box border border-gray-200 relative p-2 group">
                <div className="image flex items-center justify-center h-[200px]">
                    <Image
                        className="w-[180px] h-[180px] object-cover"
                        src={it.image_1}
                        alt="Product Image"
                        width={280}
                        height={220}
                    />
                    <div className="group-hover:opacity-100 group-hover:visible opacity-0 transition-all duration-500 absolute top-0 bg-[#00000042] w-full h-[210px] flex items-center justify-center gap-3">
                        {user && user?.wishlists?.items?.some((item) => item._id === it._id) ? (
                            <button
                                onClick={async () => {
                                    await dispatch(AddToWishlist({ id: section?.user?.id, item: it }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }}
                                className="text-sm font-medium text-white bg-white h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1"
                            >
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="cursor-pointer w-6 inline-block"
                                >
                                    <path
                                        d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                                        className="fill-[#FA8232]"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <button
                                onClick={async () => {
                                    await dispatch(AddToWishlist({ id: section?.user?.id, item: it }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }}
                                className="text-sm font-medium text-white bg-white h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    className="cursor-pointer fill-[#FA8232] hover:fill-yellow inline-block"
                                    viewBox="0 0 64 64"
                                >
                                    <path
                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                        data-original="#000000"
                                    />
                                </svg>
                            </button>
                        )}
                        <button onClick={async (e) => {
                            await dispatch(AddToCart({ id: section?.user?.id, item: it }))
                            await dispatch(FetchUser({ id: section?.user?.id }))
                        }} className="text-sm font-medium text-white bg-white h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 ">
                            <svg viewBox="0 0 24 24" className='w-7' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5"
                                        stroke="#FA8232"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M9.99219 11H11.9922M13.9922 11H11.9922M11.9922 11V9M11.9922 11V13"
                                        stroke="#FA8232"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M11 19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5"
                                        stroke="#FA8232"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                    <path
                                        d="M17 19.5C17 20.3284 16.3284 21 15.5 21C14.6716 21 14 20.3284 14 19.5"
                                        stroke="#FA8232"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />{" "}
                                </g>
                            </svg>
                        </button>
                        <button onClick={(e) => {
                            // addToWishlist(e.target.dataset.id);
                            Router.push(`/shop/view-details/${it._id}`)
                        }} className="text-sm font-medium text-white bg-white h-12 w-12 flex items-center justify-center rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 ">
                            <svg viewBox="0 0 24 24" fill="none" className='w-5' xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
                                        fill='#FA8232'
                                    />{" "}
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"
                                        fill='#FA8232'
                                    />{" "}
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="text flex flex-col gap-2 p-2">
                    <div className="rating flex items-center gap-2">
                        <Rating value={4} readOnly size='small' />
                        <span className='text-gray-500 text-sm'>(738)</span>
                    </div>
                    <div className="content">
                        <h3 className='text-[14px] font-bold text-gray-600'>{it.title.slice(0, 30)}...</h3>
                    </div>
                    <div className="price flex items-center gap-2 text-sm">
                        <span className='text-gray-500'><del>${it.price}</del></span>
                        <span className='text-sky-500'>${it.del_price}</span>
                    </div>
                </div>
            </div >
        ))
    );
}

export default Product;
