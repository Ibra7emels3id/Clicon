'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FetchCategories } from '@/lib/features/Category/GetCategoriesSlice';
import { FetchUsers } from '@/lib/features/Users/GetUsersSlice';

const Table = () => {
    const { users } = useAppSelector(state => state.users);
    const [search, setSearch] = React.useState('');
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const [productId, setProductId] = React.useState(null);
    const [productName, setProductName] = React.useState('');
    const [isShow, setIsShow] = React.useState(false);



    // Handle Delete Product
    const handleDelete = useCallback((id, name) => {
        if (id && name) {
            setIsOpen(!isOpen);
            setProductId(id);
            setProductName(name);
        }
    }, [])


    // Handle get all products
    useEffect(() => {
        dispatch(FetchUsers())
    }, [])


    // Btn Edit
    const BtnEdit = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
    );

    // Btn Delete
    const BtnDelete = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    );

    // Cancel View
    const CancelView = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
    );


    return (
        <>
            <div className="flex-1 p-4 max-xl:ml-16 ml-64 overflow-auto">
                <div className="flex flex-col">
                    <div className="flex w-full items-center justify-between min-w-[700px]">
                        <h3 className='font-bold text-2xl '>Users.</h3>
                        <Link href={'/users/AddUser'} className='bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Add User</Link>
                    </div>
                    <div className="flex gap-1">
                        <div className="search w-full py-4">
                            <input onChange={(e) => setSearch(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border rounded-full px-4 py-2' type="text" placeholder="Search..." />
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="flex flex-col justify-between">
                        <div className="w-full py-5 min-w-[700px]">
                            <div className="flex flex-col items-center  rounded-md bg-white border border-gray-500/20">
                                <div className="lg:table- overflow-auto  w-full ">
                                    <div className="text-gray-900 text-sm text-left">
                                        <ul className='flex items-center justify-between'>
                                            <li className="px-4 py-3 font-semibold truncate w-[400px]">State User</li>
                                            <li className="px-4 py-3 font-semibold truncate">Date && Time</li>
                                            <li className="px-4 py-3 font-semibold truncate ">Cart</li>
                                            <li className="px-4 py-3 font-semibold truncate">Is Block</li>
                                            <li className="px-4 py-3 font-semibold truncate">Action</li>
                                        </ul>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {users?.map((product, index) => (
                                            <React.Fragment key={index}>
                                                <ul className="border-t border-gray-500/20 flex items-center justify-between">
                                                    <li className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate w-[400px]">
                                                        <div className="border border-gray-300 rounded p-2">
                                                            <img src={product?.image || '/images/Avatar.png'} alt="Product" className="w-16" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="truncate w-full">{product?.name}<span className='ml-2'>{product.isActive ? '✅' : '❌'}</span></span>
                                                            <span className="truncate w-full font-bold">{product?.email}</span>
                                                        </div>
                                                    </li>
                                                    <li className="px-4 py-3 w-[200px]">
                                                        <span className="truncate">{product?.createdAt.split('T')[0]}</span><br />
                                                        <span className="">{new Date(product?.createdAt).toLocaleTimeString()}</span>
                                                    </li>
                                                    <li className="px-4 py-3 w-[150px]">
                                                        <span className="truncate">#{product?.wishlists.quantity || '00'}</span><br />
                                                    </li>
                                                    <li className="px-4 py-3 w-[100px]">
                                                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                                            <input type="checkbox" className="sr-only peer" defaultChecked={product?.isBlock} />
                                                            <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                                            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                                        </label>
                                                    </li>
                                                    <li className="px-4 space-x-2 py-3 h-full">
                                                        <button onClick={() => {
                                                            setIsShow(isShow === product?._id ? false : product?._id);
                                                        }} className=" inline-block transition-all duration-300 text-sky-700 hover:text-sky-800 cursor-pointer font-bold h-full">
                                                            {isShow === product?._id ? CancelView : BtnEdit}
                                                        </button>
                                                    </li>
                                                </ul>
                                                <div className={`${isShow === product?._id ? 'flex flex-col ' : 'hidden'} border-t border-gray-500/20 w-full`}>
                                                    {product?.wishlists?.items?.map((item, index) => (
                                                        <ul key={index} className='w-full flex items-center justify-between' >
                                                            <li className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate w-[400px]">
                                                                <div className="border border-gray-300 rounded p-2">
                                                                    <img src={item?.image_1} alt="Product" className="w-16" />
                                                                </div>
                                                                <span className="truncate w-full">{item?.title?.slice(0, 20)}</span>
                                                            </li>
                                                            <li className="px-4 py-3 w-[200px]">
                                                                <span className="truncate">{item?.category?.name}</span><br />
                                                                <span className="">{item?.category?.min_category}</span>
                                                            </li>
                                                            <li className="px-4 py-3 w-[150px]">${item?.price}</li>
                                                            <li className="px-4 py-3 w-[100px]">
                                                                <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                                                    <input type="checkbox" className="sr-only peer" defaultChecked={item?.inStock} />
                                                                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                                                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                                                </label>
                                                            </li>
                                                            <li className="px-4 space-x-2 py-3 h-full">
                                                                <button onClick={() => handleDelete(item?._id, item?.title)} className=" inline-block transition-all duration-300 text-red-700 hover:text-red-800 cursor-pointer font-bold h-full">
                                                                    {BtnDelete}
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Dialog isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={handleDelete} productId={productId} productName={productName} /> */}
        </>
    );
}

export default React.memo(Table);
