'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Rating } from '@mui/material';
import { useRouter } from 'next/navigation';
import FormLocation from '@/app/components/FormLocation';
import Product from './_components/Products';

const Page = ({params}) => {
    const { id } = params;
    const searchParam = decodeURIComponent(id);
    const [minPrice, setMinPrice] = useState(30);
    const [maxPrice, setMaxPrice] = useState(10000);

    return (
        <>
            <FormLocation />
            <div className="grid grid-cols-9 gap-2 max-w-7xl m-auto mt-5 p-2">
                <div className="fle col-span-2">
                    <div className="fle ">
                        <h3 className="text-2xl font-bold">Price Range</h3>
                        <div className="w-full max-w-md mx-auto mt-3">
                            <div className="flex relative h-10">
                                <input
                                    type="range"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                    className=" absolute left-0 top-4  border-[#FA8232] appearance-none  bg-[#FA8232] h-2  w-[130px] focus:border-none rounded-md focus:outline-none focus:ring-0"
                                    placeholder="السعر الأدنى"
                                    min={10}
                                    max={1000}
                                />
                                <input
                                    type="range"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className=" absolute left-[120px] w-[130px] top-4  border-[#FA8232] appearance-none  bg-[#FA8232] h-2 outline-none focus:border-none rounded-md focus:outline-none  focus:ring-0 "
                                    placeholder="السعر الأدنى"
                                    min={1000}
                                    max={10000}
                                />
                            </div>
                            <div className="flex justify-between gap-2 text-sm text-gray-700 mt-2">
                                <input onChange={(e) => setMinPrice(Number(e.target.value))}
                                    className='border border-gray-200 w-full focus:outline-none p-2' type="number" value={minPrice} placeholder='Enter Min Price' />
                                <input onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className='border border-gray-200 w-full focus:outline-none p-2' type="number" value={maxPrice} placeholder='Enter Min Price' />
                            </div>
                            <ul className=' space-y-3 mt-5'>
                                <li className='flex items-center gap-2'>
                                    <input
                                        className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                        type="checkbox"
                                        name="category-1"
                                        id="category-1"
                                    />
                                    <label htmlFor="category-1" className=' cursor-pointer text-gray-400 text-sm hover:text-gray-900'>All Price</label>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <input
                                        className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                        type="checkbox"
                                        name="category-2"
                                        id="category-2"
                                    />
                                    <label htmlFor="category-2" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Under $20</label>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <input
                                        className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                        type="checkbox"
                                        name="category-3"
                                        id="category-3"
                                    />
                                    <label htmlFor="category-3" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>$100 to $300</label>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <input
                                        className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                        type="checkbox"
                                        name="category-4"
                                        id="category-4"
                                    />
                                    <label htmlFor="category-4" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>$300 to $500</label>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <input
                                        className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                        type="checkbox"
                                        name="category-5"
                                        id="category-5"
                                    />
                                    <label htmlFor="category-5" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>$500 to $1,000</label>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <input
                                        className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                        type="checkbox"
                                        name="category-6"
                                        id="category-6"
                                    />
                                    <label htmlFor="category-6" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>$1,000 to $10,000</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=".card_watch mt-5">
                        <div className="box p-4 flex flex-col items-center justify-center gap-4 border-4 border-[#FFE7D6]">
                            <div className="image p-5">
                                <Image
                                    src={'/images/wh.png'}
                                    alt="watch"
                                    objectFit="cover"
                                    width={150}
                                    height={150}
                                    className=''
                                />
                            </div>
                            <div className="content text-center">
                                <h2 className="text-lg font-bold">Apple Watch</h2>
                                <p className="text-red-600 text-[12px]">SERIES 7</p>
                            </div>
                            <div className="title text-center space-y-3">
                                <h4 className='text-2xl font-bold'>Heavy on Features.
                                    Light on Price.</h4>
                                <p className="text-gray-500 text-md">Only for:<span className=' bg-yellow-400 py-2 px-1 rounded-lg ml-2'>$299 USD</span></p>
                            </div>
                            <div className="btn flex flex-col items-center w-full p-1 gap-3">
                                <button className=" hover:bg-white cursor-pointer  hover:text-[#FA8232] text-white bg-[#FA8232] ml-2  border-2 border-[#FA8232] py-2 px-4 w-full">Add to Cart</button>
                                <button className="text-[#FA8232] bg-white hover:bg-[#FA8232] py-2   border-2 border-[#FA8232] px-4 w-full">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-7 ">
                    <div className="flex flex-col w-full ">
                        <div className="flex items-center justify-between w-full">
                            <div className="input w-[400px]">
                                <input
                                    className="appearance-none border-gray-200 border-2 w-full focus:outline-none p-2"
                                    type="text"
                                    placeholder="Search for products..."
                                />
                            </div>
                            <div className="sort">
                                <label htmlFor="sort" className="sr-only">Sort by</label>
                                <select className="w-full focus:outline-none p-2 border-2 border-gray-200">
                                    <option value="">Sort by</option>
                                    <option value="1">Price High to Low</option>
                                    <option value="2">Price Low to High</option>
                                    <option value="3">Newest First</option>
                                    <option value="4">Oldest First</option>
                                </select>
                            </div>
                        </div>
                        <div className="bg-gray-200 mt-3 w-full p-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <h5 className='text-gray-700'>Active Filters:</h5>
                                <p>Electronics Devices</p>
                                <p>5 Star Rating</p>
                            </div>
                            <p className='text-gray-700 text-sm'><small className='text-black font-bold text-sm'>65,867</small> Results found.</p>
                        </div>
                    </div>
                    <div className=" grid grid-cols-4 gap-5 w-full mt-5">
                        <Product id={searchParam} min={minPrice} max={maxPrice} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
