'use client'
import Loader from '@/app/Loader';
import { AddToCart } from '@/lib/features/Cart/AddToCartSlice';
import { FetchUser } from '@/lib/features/Cart/GetUserCartSlice';
import { RemoveCartQuantity } from '@/lib/features/Cart/RemoveCartQuantity';
import { fetchProductId } from '@/lib/features/Product/GetProductSlice';
import { AddToWishlist } from '@/lib/features/wishlists/AddTowishlistSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { Rating } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';

const Page = ({ params }) => {
    const { postId } = params;
    const { product, loading } = useAppSelector((state) => state.product)
    const { user } = useAppSelector((state) => state.user)
    const [imageUrl, setImageUrl] = useState(product?.image_1)
    const [dialog, setDialog] = React.useState(false)
    const [productId, setProductId] = React.useState(null)
    const [productName, setProductName] = React.useState(null)
    const dispatch = useAppDispatch()
    const { data: section } = useSession()


    // Handle Show Dialog Delete Item 
    const HandleShowDialog = useCallback((productId, name) => {
        setDialog(!dialog)
        setProductId(productId)
        setProductName(name)
    }, [dialog])

    // Set image url
    React.useEffect(() => {
        if (product?.image_1) setImageUrl(product.image_1)
    }, [product])

    // Fetch Data Api For Id
    React.useEffect(() => {
        dispatch(fetchProductId(postId))
    }, [postId])


    // Handle Get User 
    useEffect(() => {
        if (section?.user?.id) {
            dispatch(FetchUser({ id: section?.user?.id }))
        }
    }, [section?.user?.id]);



    // set Loading
    if (loading) return <Loader loading={loading} />


    return (
        <div className="max-w-7xl m-auto lg:px-7 px-3 my-10">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
                <div className="w-full lg:sticky top-0">
                    <div className="flex flex-col gap-2">
                        <div className="flex border border-gray-200 p-5">
                            <Image
                                src={imageUrl}
                                alt="Product"
                                className=" w-[650px] h-[650px] object-contain "
                                loading="lazy"
                                height={100}
                                width={100}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-3 lg:gap-7 w-24 max-sm:w-14 shrink-0">
                            <Image
                                src={product?.image_1}
                                alt="Product_1"
                                className="w-full object-cover cursor-pointer"
                                height={100}
                                width={100}
                                loading="lazy"
                                onClick={() => {
                                    setImageUrl(product.image_1)
                                }}
                            />
                            <Image
                                src={product?.image_2}
                                alt="Product_2"
                                className="w-full object-cover cursor-pointer"
                                height={100}
                                width={100}
                                loading="lazy"
                                onClick={() => {
                                    setImageUrl(product.image_2)
                                }}
                            />
                            <Image
                                src={product?.image_3}
                                alt="Product_3"
                                className="w-full object-cover cursor-pointer"
                                height={100}
                                width={100}
                                loading="lazy"
                                onClick={() => {
                                    setImageUrl(product.image_3)
                                }}
                            />
                            <Image
                                src={product?.image_4}
                                alt="Product_4"
                                className="w-full object-cover cursor-pointer"
                                height={100}
                                width={100}
                                loading="lazy"
                                onClick={() => {
                                    setImageUrl(product.image_4)
                                }}
                            />
                            <Image
                                src={product?.image_5}
                                alt="Product_5"
                                className="w-full object-cover cursor-pointer"
                                height={100}
                                width={100}
                                loading="lazy"
                                onClick={() => {
                                    setImageUrl(product.image_5)
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                            {product?.title}
                        </h3>
                        <p className="text-slate-500 mt-2 text-sm">
                            Women Embroidered Georgette A-line Kurta With Attached Dupatta
                            (Maroon)
                        </p>
                        <div className="flex items-center flex-wrap gap-4 mt-6">
                            <h4 className="text-slate-900 text-2xl sm:text-3xl font-semibold">
                                ${product?.price}
                            </h4>
                            <p className="text-slate-500 text-lg">
                                <strike>${product?.del_price}</strike>{" "}
                                <span className="text-sm ml-1.5">Tax included + 4</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <Rating readOnly value={4} />
                            <p className="text-slate-500 text-sm">253 ratings and 27 reviews</p>
                        </div>
                    </div>
                    <hr className="my-6 border-slate-300" />
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                            Sizes
                        </h3>
                        <div className="flex flex-wrap gap-4 mt-4">
                            {product?.size?.map((s, index) => {
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={`w-10 h-9 cursor-pointer border border-slate-300 hover:border-[#FA8232] text-sm  flex items-center justify-center shrink-0 ${s === product.selected_size ? 'border-blue-600 text-blue-600' : ''}`}
                                    >
                                        {s}
                                    </button>
                                )
                            })}
                        </div>
                        <div className="mt-6 flex items-center flex- gap-4">
                            <div className="flex items-center justify-between w-full">
                                <button onClick={async (e) => {
                                    await dispatch(RemoveCartQuantity({ id: section?.user?.id, itemId: product._id }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }}
                                    type="button"
                                    className="w-5 h-5 text-slate-600 flex items-center justify-center rounded-full border-2 border-slate-300 hover:border-[#FA8232] hover:text-[#FA8232] cursor-pointer"
                                >
                                    -
                                </button>
                                <p className="text-slate-500 text-sm">
                                    {user?.cart?.items.find((it) => it._id === product?._id)?.quantity || 0}
                                </p>
                                <button onClick={async (e) => {
                                    await dispatch(AddToCart({ id: section?.user?.id, item: product }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }}
                                    type="button"
                                    className="w-5 h-5 text-slate-600 flex items-center justify-center rounded-full border-2 border-slate-300 hover:border-[#FA8232] hover:text-[#FA8232] cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                            <button onClick={async (e) => {
                                await dispatch(AddToCart({ id: section?.user?.id, item: product }))
                                await dispatch(FetchUser({ id: section?.user?.id }))
                            }}
                                type="submit"
                                className="px-4 text-center py-3 w-full border border-[#FA8232] bg-white hover:bg-[#FA8232] text-[#FA8232] hover:text-white cursor-pointer text-sm font-medium"
                            >
                                Add To Cart
                            </button>
                            <Link href={'/shop/cart'} className="px-4 py-3 w-full flex items-center justify-center border border-[#FA8232] bg-[#FA8232] hover:bg-white hover:text-[#FA8232] cursor-pointer text-white text-sm font-medium">
                                Bay Now
                            </Link>
                        </div>
                    </div>
                    <hr className="my-6 border-slate-300" />
                    <div className='flex items-center justify-between w-full'>
                        <div className="flex max-md:flex-wrap gap-6 ">
                            {user && user?.wishlists?.items?.some((item) => item._id === product?._id) ?
                                <button onClick={async () => {
                                    await dispatch(AddToWishlist({ id: section?.user?.id, item: product }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }} className=' group flex items-center gap-2 text-[#FA8232] cursor-pointer'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        className="cursor-pointer fill-[#FA8232] hover:fill-yellow inline-block w-5"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    Add to Wishlist
                                </button> : <button onClick={async () => {
                                    await dispatch(AddToWishlist({ id: section?.user?.id, item: product }))
                                    await dispatch(FetchUser({ id: section?.user?.id }))
                                }} className=' group flex items-center gap-2 text-gray-500 cursor-pointer'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        className="cursor-pointer fill-gray-500 hover:fill-yellow inline-block w-5"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    Add to Wishlist
                                </button>
                            }
                        </div>
                        <div className="flex justify-end max-md:w-full">
                            <h4 className='mr-2 text-sm text-gray-600'>Share product:</h4>
                            <button onClick={() => {
                                // sharing logic goes here Set Copy
                                navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL_SITE}/products/product-details/${product?._id}`);
                                toast.success('Copy Link Product Success')
                            }} className='group cursor-pointer'>
                                <svg viewBox="0 0 24 24" fill="none" className='w-5' xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
                                            fill="#0F0F0F"
                                            className='group-hover:fill-[#FA8232]'
                                        />{" "}
                                        <path
                                            d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
                                            fill="#0F0F0F"
                                            className='group-hover:fill-[#FA8232]'
                                        />{" "}
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <hr className="my-6 border-slate-300" />
                    <div>
                        <pre className="whitespace-pre-wrap break-words p-1 font-sans text-[12px] md:text-base text-gray-700">
                            {product?.description}
                        </pre>
                        {/* <pre className='text-gray-600 font-sans'>{product?.description}</pre> */}
                    </div>
                    <hr className="my-6 border-slate-300" />
                </div>
            </div>
        </div>
    );
}

export default Page;
