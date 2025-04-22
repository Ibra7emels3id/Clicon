'use client'
import { FetchOrders } from '@/lib/features/Order/GetAllOrdersSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { use, useCallback, useEffect, useMemo } from 'react';
import Dialog from './Dialog';

const Table = () => {
    const [search, setSearch] = React.useState('');
    const [category, setCategory] = React.useState('all');
    const [sort, setSort] = React.useState('newest');
    const { orders } = useAppSelector((state) => state.orders)
    const dispatch = useAppDispatch();
    const [orderId, setOrderId] = React.useState('');
    const [isOpen , setIsOpen] = React.useState(false);
    const [orderNumber , setOrderNumber] = React.useState('')



    // Handle Sort Orders
    const sortedProducts = orders?.slice()?.sort((a, b) => {
        if (sort === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sort === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt);
        }
        return 0;
    });



    // Filter Orders by search
    const filteredOrders = useMemo(() => {
        return sortedProducts?.filter((item) => {
            // Filter by category
            const matchCategory = category === 'all' || item.status === category;
            // Search Orders
            const name = item?.user_id?.name?.toLowerCase() || '';
            const email = item?.user_id?.email?.toLowerCase() || '';
            const number = item?.orderNumber?.toLowerCase() || '';
            const searchText = search.toLowerCase();
            const matchSearch = name.includes(searchText) || email.includes(searchText) || number.includes(searchText);
            return matchCategory && matchSearch;
        });
    }, [search, category, sortedProducts]);


    // Handle Delete Order
    const handleDelete = useCallback((id , num) => {
        if (id) {
            setOrderId(id);
            setIsOpen(true);
            setOrderNumber(num)
        }
    }, [])


    // Fetch Orders
    useEffect(() => {
        dispatch(FetchOrders())
    }, [])

    // Btn Delete
    const BtnDelete = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    );

    // Btn View 
    const BtnView = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
    );




    return (
        <>
            <div className="flex-1 p-4 max-xl:ml-16 ml-64 overflow-auto">
                <div className="flex flex-col">
                    <div className="flex w-full items-center justify-between min-w-[1200px]">
                        <h3 className='font-bold text-2xl '>Management Orders.</h3>
                        <Link href={'/products/AddProduct'} className='bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Add Product</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 items-center min-w-[1200px]">
                        <div className="search w-full py-4">
                            <input onChange={(e) => setSearch(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border rounded-full px-4 py-2' type="text" placeholder="Search..." />
                        </div>
                        {/* Filter Status */}
                        <select onChange={(e) => setCategory(e.target.value)} name="filter" id="filter" className='w-full cursor-pointer border-gray-200 focus:border-gray-200 focus:outline-none border rounded-full px-4 h-10'>
                            <option value="all">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Packing">Packing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        {/* Sort */}
                        <select onChange={(e) => setSort(e.target.value)} className='w-full cursor-pointer border-gray-200 focus:border-gray-200 focus:outline-none border rounded-full px-4 h-10'>
                            <option hidden>Sort by</option>
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="flex flex-col justify-between">
                        <div className="w-full py-5 min-w-[1200px]">
                            <div className="flex flex-col items-center  rounded-md bg-white border border-gray-500/20">
                                <table className="lg:table- overflow-auto  w-full ">
                                    <thead className="text-gray-900 text-sm text-left">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold truncate">
                                                User Details
                                            </th>
                                            <th className="px-4 py-3 font-semibold truncate">
                                                PayMent Order
                                            </th>
                                            <th className="px-4 py-3 font-semibold truncate">
                                                Address && Date
                                            </th>
                                            <th className="px-4 py-3 font-semibold truncate ">
                                                Details Status
                                            </th>
                                            <th className="px-4 py-3 font-semibold truncate w-[150px] text-center">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-500">
                                        {filteredOrders?.map((order, index) => (
                                            <tr key={index} className="border-t border-gray-500/20">
                                                <td className="md:px-4 pl-2 md:pl-4 py-3 flex flex-col items-start space-y-2 ">
                                                    <p className=' block '>Name: {order?.user_id?.name}</p>
                                                    <p className=' block '>Email: {order?.user_id?.email}</p>
                                                    <p className=' block '>Phone: {order?.phone}</p>
                                                </td>
                                                <td className="px-4 py-3 space-y-2">
                                                    <span className="block">{order?.paymentIntentId}</span>
                                                    <span className="block">{order?.clientSecret?.slice(0, 20)}</span>
                                                    <span className="block">#{order?.orderNumber?.slice(4, 14)}</span>
                                                </td>
                                                <td className="px-4 py-3 space-y-2">
                                                    <p>Counter: <span className="">{order?.country}</span></p>
                                                    <p>Address: <span className="">{order?.address}</span></p>
                                                    <p>Order Date: <span>{order?.createdAt.split('T')[0]} && {new Date(order?.createdAt).toLocaleTimeString()}</span></p>
                                                </td>
                                                <td className="px-4 py-3 space-y-2">
                                                    <p className='w-[200px] flex items-center justify-between gap-2'>Status: <span className={`${order?.status === 'Completed' ? 'bg-green-400 w-[66%]' : 'bg-red-400'} w-[66%] bg-green-400 px-3 py-1 rounded-full text-white font-normal inline-block text-center`}> {order?.status}</span></p>
                                                    <p className='w-[200px] flex items-center justify-between gap-2'>PayMent: <span className={`${order?.paymentStatus === 'Paid' ? 'bg-green-400 w-[100%]' : 'bg-red-400'} bg-green-400 px-3 py-1 rounded-full text-white font-normal inline-block  text-center`}> {order?.paymentStatus}</span></p>
                                                </td>
                                                <td className="px-4 space-x-2 py-3 h-full w-[150px] text-center">
                                                    <Link href={`/orders/order/${order?._id}`} className=" inline-block transition-all duration-300 text-sky-700 hover:text-sky-800 cursor-pointer font-bold h-full">
                                                        {BtnView}
                                                    </Link>
                                                    <button onClick={() => handleDelete(order?._id , order?.orderNumber)} className=" inline-block transition-all duration-300 text-red-700 hover:text-red-800 cursor-pointer font-bold h-full">
                                                        {BtnDelete}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog isOpen={isOpen} setIsOpen={setIsOpen} orderNumber={orderNumber} handleDelete={handleDelete} orderId={orderId} />
        </>
    );
}

export default Table;
