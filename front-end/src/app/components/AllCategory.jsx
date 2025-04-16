'use client'
import { FetchCategory } from '@/lib/features/Category/GetCategoriesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const AllCategory = () => {
    const { category } = useAppSelector((state) => state.categories)
    const [show, setShow] = React.useState(false);
    const [minShow, setMinShow] = React.useState(false);
    const [IndexShow, setIndexShow] = React.useState(null);
    const dispatch = useAppDispatch()

    // Handle Fetch Data
    useEffect(() => {
        dispatch(FetchCategory())
    }, [])

    return (
        <div className="list px-1 rounded-md relative " >
            <p onClick={() => {
                setShow(!show)
                setMinShow(false)
            }} className='bg-[#FA8232] w-[160px] cursor-pointer flex items-center justify-center gap-2 text-center text-white py-2'>All Category
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform={show ? 'rotate(90)' : 'rotate(0)'}
                    className='w-5 transition-all duration-200'
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                            fill="#fff"
                        />{" "}
                    </g>
                </svg>
            </p>
            <ul className={`${show ? 'block' : 'hidden'} bg-white shadow-2xl absolute py-2 rounded top-12 left-1 space-y-1 z-[100] w-[250px]`}>
                {category.map(({ category, _id }, index) => (
                    <li key={_id} onClick={() => {
                        setMinShow(index + 1 ? true : false);
                        setIndexShow(index)
                    }} className=' group flex items-center justify-between text-md w-full px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 text-gray-700'>
                        {category}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            transform={'rotate(0)'}
                            className='w-5 transition-all duration-200 opacity-0 group-hover:opacity-100'
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                                    fill="#000"
                                />{" "}
                            </g>
                        </svg>
                    </li>
                ))}
            </ul>
            <div className={`${minShow ? 'flex' : 'hidden'} gap-4 bg-white shadow-2xl absolute p-4  rounded top-12 left-[258px] space-y-1 z-[100] max-w-[950px]`}>
                <ul className="w-[335px]">
                    <li className=' flex items-center justify-between text-md w-full px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 text-gray-700'>
                        All
                    </li>
                    {category[IndexShow]?.min_category?.slice(0, 10)?.map((cat, index) => (
                        <li key={index} className='text-md w-full px-4 py-2 cursor-pointer hover:bg-gray-100 transition-all duration-300 text-gray-700'>
                            <Link href={'/category/min-category/'+category[IndexShow]?.category+'/'+cat} className='w-full '>{cat}</Link>
                        </li>
                    ))}
                </ul>
                <div className="FEATURED w-[400px]">
                    <h2 className="text-xl font-bold text-gray-800">Featured Products</h2>
                    <div className="flex flex-col gap-4">
                        <div className="box flex items-center w-full border border-gray-200 p-2">
                            <div className="flex  items-center ">
                                <Image
                                    src={"/images/ImageHand.png"}
                                    alt="Product"
                                    layout="fixed"
                                    width={100}
                                    height={100}
                                    className='w-[140px]'
                                />
                            </div>
                            <div className="flex-grow flex flex-col gap-2 w-full">
                                <h3 className="text-[13px]  font-semibold w-full">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h3>
                                <p className="text-sky-600 text-md font-bold">$99.99</p>
                            </div>
                        </div>
                        <div className="box flex items-center w-full border border-gray-200 p-2">
                            <div className="flex  items-center ">
                                <Image
                                    src={"/images/ImageHand.png"}
                                    alt="Product"
                                    layout="fixed"
                                    width={100}
                                    height={100}
                                    className='w-[140px]'
                                />
                            </div>
                            <div className="flex-grow flex flex-col gap-2 w-full">
                                <h3 className="text-[13px]  font-semibold w-full">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h3>
                                <p className="text-sky-600 text-md font-bold">$99.99</p>
                            </div>
                        </div>
                        <div className="box flex items-center w-full border border-gray-200 p-2">
                            <div className="flex  items-center ">
                                <Image
                                    src={"/images/ImageHand.png"}
                                    alt="Product"
                                    layout="fixed"
                                    width={100}
                                    height={100}
                                    className='w-[140px]'
                                />
                            </div>
                            <div className="flex-grow flex flex-col gap-2 w-full">
                                <h3 className="text-[13px]  font-semibold w-full">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</h3>
                                <p className="text-sky-600 text-md font-bold">$99.99</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" xl:flex hidden flex-col items-center justify-center p-4 gap-2 bg-[#f6e583c7] border border-[#f6e583c7] ">
                    <Image
                        src={'/images/Air.png'}
                        alt="Air"
                        width={200}
                        height={100}
                        className='w-[130px] h-[130px] object-cover'
                    />
                    <div className="flex items-center justify-center gap-2">
                        <h3 className="text-3xl font-bold text-black text-center">Xiaomi True Wireless Earbuds</h3>
                    </div>
                    <div className="price flex items-center justify-center gap-2">
                        <span className="text-[10px] text-gray-600">Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-sm text-gray-500">Only for:</p>
                        <Link href={'/'} className='text-black text-md bg-white px-2 py-1 font-bold rounded'>$22.99 USD</Link>
                    </div>
                    <div className="btn w-full flex items-center justify-center gap-2">
                        <button className="text-sm font-medium text-white bg-[#FA8232] cursor-pointer px-4 py-3 transition duration-500 ease-in-out transform hover:-translate-y-1 w-[250px]">Shop now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllCategory;
