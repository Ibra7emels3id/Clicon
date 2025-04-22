'use client'
import { FetchProducts } from '@/lib/features/Product/GetProductsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo } from 'react';
// import Dialog from './Dialog';
import { FetchCategories } from '@/lib/features/Category/GetCategoriesSlice';
import { FetchBlogs } from '@/lib/features/Blog/GetBlogs';
import Dialog from './Dialog';

const Table = () => {
    const { blogs } = useAppSelector(state => state.blogs);
    const { categories } = useAppSelector(state => state.categories);
    const [search, setSearch] = React.useState('');
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = React.useState(false);
    const [productId, setProductId] = React.useState(null);
    const [productName, setProductName] = React.useState('');


    // Filter Products
    const filteredProducts = useMemo(() => {
        return blogs?.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase())
        })
    }, [search, blogs])

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
        dispatch(FetchBlogs())
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
                        <h3 className='font-bold text-2xl '>Blogs.</h3>
                        <Link href={'/blogs/AddBlog'} className='bg-[#FA8232] hover:bg-[#363636] w-[200px] transition-all duration-300 text-white flex items-center justify-center h-12'>Add Blog</Link>
                    </div>
                    <div className="flex gap-1">
                        <div className="search w-full py-4">
                            <input onChange={(e) => setSearch(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border rounded-full px-4 py-2' type="text" placeholder="Search..." />
                        </div>
                        <div className="category w-full py-4">
                            <select onChange={(e) => setSearch(e.target.value)} className='w-full border-gray-200 focus:border-gray-200 focus:outline-none border h-10 rounded-full px-4 py-2'>
                                <option value="">All</option>
                                {categories?.map((category) => (
                                    <option key={category._id} value={category.category}>{category.category}</option>
                                ))}
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
                                            <th className="px-4 py-3 font-semibold truncate">Product</th>
                                            <th className="px-4 py-3 font-semibold truncate">Category</th>
                                            <th className="px-4 py-3 font-semibold truncate hidden md:block">Date</th>
                                            <th className="px-4 py-3 font-semibold truncate">In Stock</th>
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
                                                    <span className="truncate max-sm:hidden w-full">{product?.title?.slice(0, 20)}</span>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <span className="truncate">{product?.category}</span><br />
                                                </td>
                                                <td className="px-4 py-3 max-sm:hidden">
                                                    <span className="truncate">{product?.date}</span><br />
                                                </td>
                                                <td className="px-4 py-3">
                                                    <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                                        <input type="checkbox" className="sr-only peer" defaultChecked={product?.inStock} />
                                                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                                    </label>
                                                </td>
                                                <td className="px-4 space-x-2 py-3 h-full">
                                                    <Link href={`/blogs/EditBlog/${product?._id}`} className=" inline-block transition-all duration-300 text-sky-700 hover:text-sky-800 cursor-pointer font-bold h-full">
                                                        {BtnEdit}
                                                    </Link>
                                                    <button onClick={() => handleDelete(product?._id, product?.title)} className=" inline-block transition-all duration-300 text-red-700 hover:text-red-800 cursor-pointer font-bold h-full">
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
