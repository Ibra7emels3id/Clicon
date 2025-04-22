'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo } from 'react';
import { FetchCategories } from '@/lib/features/Category/GetCategoriesSlice';
import Dialog from './Dialog';

const Table = () => {
    const { categories } = useAppSelector(state => state.categories);
    const [search, setSearch] = React.useState('');
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const [productId, setProductId] = React.useState(null);
    const [productName, setProductName] = React.useState('');
    const [isShow, setIsShow] = React.useState(false);
    const [category, setCategory] = React.useState('all');
    const [sort, setSort] = React.useState('asc');


    // Handle Sort Products
    const sortedProducts = categories?.slice()?.sort((a, b) => {
        if (sort === 'asc') {
            return new Date(b.date) - new Date(a.date);
        } else if (sort === 'desc') {
            return new Date(a.date) - new Date(b.date);
        }
        return 0;
    });
    

    // Filter Products
    const filteredProducts = useMemo(() => {
        return sortedProducts?.filter((product) => {
            const matchSearch = product.category.toLowerCase().includes(search.toLowerCase()) || '';
            const matchCategory = category === 'all' || product.category === category;
            return matchSearch && matchCategory
        })
    }, [search, sortedProducts, category])


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
        dispatch(FetchCategories())
    }, [])


    // Btn Edit
    const BtnEdit = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
    );

    // Btn Delete
    const BtnDelete = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    );


    return (
        <>
            <div className="flex-1 p-4 max-xl:ml-16 ml-64 overflow-auto">
                <div className="flex flex-col">
                    <div className="flex w-full items-center justify-between min-w-[700px]">
                        <h3 className='font-bold text-2xl '>Categories.</h3>
                        <Link href={'/categories/AddCategory'} className='bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Add Category</Link>
                    </div>
                    <div className="flex gap-1">
                        <div className="search w-full py-4">
                            <input onChange={(e) => setSearch(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border rounded-full px-4 py-2' type="text" placeholder="Search..." />
                        </div>
                        <div className="category w-full py-4">
                            <select onChange={(e) => setCategory(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border h-10 rounded-full px-4 py-2'>
                                <option value="all">All</option>
                                {categories?.map((category) => (
                                    <option key={category._id} value={category.category}>{category.category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="sort w-full py-4">
                            <select onChange={(e) => setSort(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border h-10 rounded-full px-4 py-2'>
                                <option hidden>Sort</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className="flex flex-col justify-between">
                        <div className="w-full py-5 min-w-[700px]">
                            <div className="flex flex-col items-center  rounded-md bg-white border border-gray-500/20">
                                <table className="lg:table- overflow-auto  w-full ">
                                    <thead className="text-gray-900 text-sm text-left">
                                        <tr>
                                            <th className="px-4 py-3 font-semibold truncate">Image && Title</th>
                                            <th className="px-4 py-3 font-semibold truncate">Min Category</th>
                                            <th className="px-4 py-3 font-semibold truncate hidden md:block">Date</th>
                                            <th className="px-4 py-3 font-semibold truncate">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-500">
                                        {filteredProducts?.map((product, index) => (
                                            <tr key={index} className="border-t border-gray-500/20">
                                                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                                    <div className="border border-gray-300 rounded p-2">
                                                        <img src={product?.image} alt="Product" className="w-16" />
                                                    </div>
                                                    <span className="truncate w-full">{product?.category}</span>
                                                </td>
                                                <td className="px-4 py-3 relative">
                                                    <div className="flex flex-col w-28 text-sm">
                                                        <button onClick={() => setIsShow(product._id === isShow ? null : product._id)} type="button" className=" cursor-pointer group w-full text-left px-4 pr-2 py-2 border rounded bg-white text-gray-700 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none">
                                                            <span>Select</span>
                                                            <svg className={`${isShow === product._id ? '-rotate-90' : '-rotate-90'} w-5 h-5 inline float-right transition-transform duration-200 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                                            </svg>
                                                        </button>
                                                        <ul className={`${isShow === product._id ? 'block' : 'hidden'} absolute z-40 top-15 left-4 overflow-hidden  w-44 bg-white border border-gray-300 rounded shadow-md mt-1 py-2 right-0`}>
                                                            {product?.min_category?.map((cat, index) => (
                                                                <li key={index} className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer">{cat}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="truncate w-full">{product?.date.split('T')[0]}</span><br />
                                                    <span className="truncate w-full">{new Date(product?.date).toLocaleTimeString()}</span>
                                                </td>
                                                <td className="px-4 space-x-2 py-3 h-full">
                                                    <Link href={`/categories/edit-category/${product?._id}`} className=" inline-block transition-all duration-300 text-sky-700 hover:text-sky-800 cursor-pointer font-bold h-full">
                                                        {BtnEdit}
                                                    </Link>
                                                    <button onClick={() => handleDelete(product?._id, product?.category)} className=" inline-block transition-all duration-300 text-red-700 hover:text-red-800 cursor-pointer font-bold h-full">
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
            <Dialog isOpen={isOpen} setIsOpen={setIsOpen} handleDelete={handleDelete} productId={productId} productName={productName} />
        </>
    );
}

export default React.memo(Table);
