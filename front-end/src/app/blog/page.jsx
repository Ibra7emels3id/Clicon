'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Blogs from './_components/Blogs';

const Page = () => {
    const [category, setCategory] = React.useState('All');
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState('high');
    const [checkbox, setCheckbox] = React.useState('');


    return (
        <div className='max-w-7xl mx-auto lg:px-7 px-4 py-10'>
            <div className="grid grid-cols-9 gap-2 max-w-7xl m-auto mt-5 p-2">
                <div className="flex flex-col max-md:hidden col-span-3">
                    <div className="category border border-gray-200 p-5">
                        <h2 className="text-2xl font-bold">Categories</h2>
                        <ul className=' space-y-3 mt-3'>
                            <li className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    id="all"
                                    name="all"
                                    checked={checkbox === 'all'}
                                    onChange={() => {
                                        setCategory('All');
                                        setCheckbox(checkbox === 'all' ? '' : 'all');
                                    }}
                                    className="appearance-none w-5 h-5 border-2 border-gray-400 checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                />
                                <label
                                    htmlFor="all"
                                    className="text-gray-400 text-sm hover:text-gray-900  cursor-pointer"
                                >
                                    All
                                </label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    type="checkbox"
                                    checked={checkbox === 'Electronics Devices'}
                                    onChange={() => {
                                        setCategory('Electronics Devices');
                                        setCheckbox(checkbox === 'Electronics Devices' ? '' : 'Electronics Devices');
                                    }}
                                    name="category-1"
                                    id="category-1"
                                />
                                <label htmlFor="category-1" className=' cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Electronics Devices</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    checked={checkbox === 'Computer & Laptop'}
                                    onChange={() => {
                                        setCategory('Computer & Laptop');
                                        setCheckbox(checkbox === 'Computer & Laptop' ? '' : 'Computer & Laptop');
                                    }}
                                    type="checkbox"
                                    name="category-2"
                                    id="category-2"
                                />
                                <label htmlFor="category-2" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Computer & Laptop</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    checked={checkbox === 'Computer Accessories'}
                                    onChange={() => {
                                        setCategory('Computer Accessories');
                                        setCheckbox(checkbox === 'Computer Accessories' ? '' : 'Computer Accessories');
                                    }}
                                    type="checkbox"
                                    name="category-3"
                                    id="category-3"
                                />
                                <label htmlFor="category-3" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Computer Accessories</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    checked={checkbox === 'Smart Phone'}
                                    onChange={() => {
                                        setCategory('Smart Phone');
                                        setCheckbox(checkbox === 'Smart Phone' ? '' : 'Smart Phone');
                                    }}
                                    type="checkbox"
                                    name="category-4"
                                    id="category-4"
                                />
                                <label htmlFor="category-4" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Smart Phone</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    checked={checkbox === 'Headphone'}
                                    onChange={() => {
                                        setCategory('Headphone');
                                        setCheckbox(checkbox === 'Headphone' ? '' : 'Headphone');
                                    }}
                                    type="checkbox"
                                    name="category-5"
                                    id="category-5"
                                />
                                <label htmlFor="category-5" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Headphone</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    checked={checkbox === 'Mobile Accessories'}
                                    onChange={() => {
                                        setCategory('Mobile Accessories');
                                        setCheckbox(checkbox === 'Mobile Accessories' ? '' : 'Mobile Accessories');
                                    }}
                                    type="checkbox"
                                    name="category-6"
                                    id="category-6"
                                />
                                <label htmlFor="category-6" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Mobile Accessories</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input
                                    className="appearance-none w-5 h-5 border-2 border-gray-400  checked:border-[#FA8232] rounded-full checked:bg-[#FA8232] checked:ring-2 checked:ring-white"
                                    checked={checkbox === 'Gaming Console'}
                                    onChange={() => {
                                        setCategory('Gaming Console');
                                        setCheckbox(checkbox === 'Gaming Console' ? '' : 'Gaming Console');
                                    }}
                                    type="checkbox"
                                    name="category-7"
                                    id="category-7"
                                />
                                <label htmlFor="category-7" className='cursor-pointer text-gray-400 text-sm hover:text-gray-900'>Gaming Console</label>
                            </li>
                        </ul>
                    </div>
                    <hr className='text-gray-300 my-10' />
                    <div className="list-blog p-3 mt-5 border rounded border-gray-200">
                        <h4 className=' text-2xl font-bold '>Latest Blog</h4>
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex gap-5 rounded">
                                <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-24 rounded h-24 object-cover' />
                                <div className="flex flex-col">
                                    <h4 className='text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                    <p className='text-sm text-gray-400'>28 Nov, 2015</p>
                                </div>
                            </div>
                            <div className="flex gap-5 rounded">
                                <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-24 rounded h-24 object-cover' />
                                <div className="flex flex-col">
                                    <h4 className='text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                    <p className='text-sm text-gray-400'>28 Nov, 2015</p>
                                </div>
                            </div>
                            <div className="flex gap-5 rounded">
                                <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-24 rounded h-24 object-cover' />
                                <div className="flex flex-col">
                                    <h4 className='text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                    <p className='text-sm text-gray-400'>28 Nov, 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='text-gray-300 my-10' />
                    <div className="Gallery p-3 mt-5 border rounded border-gray-200">
                        <h4 className=' text-2xl font-bold '>Gallery</h4>
                        <div className="grid grid-cols-3 gap-2 mt-5">
                            <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-full rounded h-24 object-cover' />
                            <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-full rounded h-24 object-cover' />
                            <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-full rounded h-24 object-cover' />
                            <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-full rounded h-24 object-cover' />
                            <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-full rounded h-24 object-cover' />
                            <img src="/images/unsplash_FO7JIlwjOtU.png" alt="" className='w-full rounded h-24 object-cover' />
                        </div>
                    </div>
                </div>
                <div className="flex-col max-md:col-span-9 max-md:flex md:hidden col-span-3">
                    <div className="category w-full">
                        <select className='w-full p-2 border border-gray-200 focus:outline-none' name="category" id="category">
                            <option hidden>All</option>
                            <option value="">Gaming Console</option>
                            <option value="">Electronics Devices</option>
                            <option value="">Gaming Console</option>
                            <option value="">Electronics Devices</option>
                        </select>
                    </div>
                    <hr className='text-gray-300 my-10' />
                </div>
                <div className=" max-md:col-span-9 col-span-6 ">
                    <div className="flex flex-col w-full ">
                        <div className="flex items-center justify-between gap-2 w-full">
                            <div className="input w-[300px] md:w-[400px]">
                                <input
                                    onChange={(e) => setSearch(e.target.value)}
                                    value={search}
                                    className="appearance-none border-gray-200 border-2 w-full focus:outline-none p-2"
                                    type="text"
                                    placeholder="Search for products..."
                                />
                            </div>
                            <div className="sort max-md:w-[120px]">
                                <label htmlFor="sort" className="sr-only">Sort by</label>
                                <select
                                    onChange={(e) => setSort(e.target.value)}
                                    className="w-full focus:outline-none p-2 border-2 border-gray-200"
                                >
                                    <option hidden>Sort by</option>
                                    <option value="high">Price High to Low</option>
                                    <option value="low">Price Low to High</option>
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Blogs category={category} sort={sort} search={search}  />
                </div>
            </div>
        </div>
    );
}

export default Page;
